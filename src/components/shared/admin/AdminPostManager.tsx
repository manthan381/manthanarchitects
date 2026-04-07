"use client";

import RichTextEditor from "@/components/shared/admin/RichTextEditor";
import {
    ChevronLeft,
    ChevronRight,
    Plus,
    Search,
    Shield,
} from "lucide-react";
import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";

type AdminPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image: string;
  author_name: string;
  meta_title: string | null;
  meta_desc: string | null;
  meta_keyword: string | null;
  status: "draft" | "published";
  published_at: string | null;
  created_at?: string;
  updated_at?: string;
};

type NewPostForm = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  authorName: string;
  metaTitle: string;
  metaDesc: string;
  metaKeyword: string;
  status: "draft" | "published";
};

type ViewMode = "list" | "editor";

const PAGE_SIZE = 5;

const initialForm: NewPostForm = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  coverImage: "",
  authorName: "",
  metaTitle: "",
  metaDesc: "",
  metaKeyword: "",
  status: "draft",
};

function logoutAdmin() {
  fetch("/api/admin/logout", { method: "POST" }).finally(() => {
    globalThis.location.href = "/admin/login";
  });
}

export default function AdminPostManager() {
  const [posts, setPosts] = useState<AdminPost[]>([]);
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState<NewPostForm>(initialForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<
    "all" | "draft" | "published"
  >("all");
  const [currentPage, setCurrentPage] = useState(1);

  const sortedPosts = useMemo(() => {
    return [...posts].sort((a, b) => {
      const aTime = a.updated_at ?? a.created_at ?? "";
      const bTime = b.updated_at ?? b.created_at ?? "";
      return bTime.localeCompare(aTime);
    });
  }, [posts]);

  const filteredPosts = useMemo(
    () =>
      sortedPosts.filter((post) => {
        const q = searchTerm.toLowerCase().trim();
        const matchesSearch =
          q.length === 0 ||
          post.title.toLowerCase().includes(q) ||
          post.slug.toLowerCase().includes(q) ||
          post.excerpt.toLowerCase().includes(q);

        const matchesStatus =
          statusFilter === "all" || post.status === statusFilter;

        return matchesSearch && matchesStatus;
      }),
    [searchTerm, statusFilter, sortedPosts]
  );

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / PAGE_SIZE));

  const paginatedPosts = useMemo(() => {
    const page = Math.min(currentPage, totalPages);
    const start = (page - 1) * PAGE_SIZE;
    return filteredPosts.slice(start, start + PAGE_SIZE);
  }, [filteredPosts, currentPage, totalPages]);

  let submitLabel = "Create Post";
  if (saving) {
    submitLabel = "Saving...";
  } else if (editingId) {
    submitLabel = "Update Post";
  }

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, statusFilter]);

  async function fetchPosts() {
    setLoading(true);
    const response = await fetch("/api/admin/posts", { cache: "no-store" });
    const result = (await response.json()) as {
      success: boolean;
      posts?: AdminPost[];
      error?: string;
    };

    if (!response.ok || !result.success) {
      setMessage(result.error ?? "Failed to load posts");
      setLoading(false);
      return;
    }

    setPosts(result.posts ?? []);
    setLoading(false);
  }

  useEffect(() => {
    fetchPosts().catch(() => {
      setMessage("Failed to load posts");
      setLoading(false);
    });
  }, []);

  async function handleCoverImageUpload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    setUploadingImage(true);
    setMessage("");

    const body = new FormData();
    body.set("file", file);

    const response = await fetch("/api/admin/upload-image", {
      method: "POST",
      body,
    });

    const result = (await response.json()) as {
      success: boolean;
      error?: string;
      url?: string;
    };

    if (!response.ok || !result.success || !result.url) {
      setMessage(result.error ?? "Failed to upload image");
      setUploadingImage(false);
      return;
    }

    setForm((prev) => ({ ...prev, coverImage: result.url ?? prev.coverImage }));
    setMessage("Image uploaded and cover URL filled.");
    setUploadingImage(false);
  }

  async function handleSavePost(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setMessage("");

    const isEditing = Boolean(editingId);
    const endpoint = isEditing ? `/api/admin/posts/${editingId}` : "/api/admin/posts";
    const method = isEditing ? "PATCH" : "POST";

    const response = await fetch(endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const result = (await response.json()) as { success: boolean; error?: string };

    if (!response.ok || !result.success) {
      setMessage(result.error ?? "Failed to save post");
      setSaving(false);
      return;
    }

    setForm(initialForm);
    setEditingId(null);
    setViewMode("list");
    setMessage(isEditing ? "Post updated successfully." : "Post created successfully.");
    await fetchPosts();
    setSaving(false);
  }

  function startCreate() {
    setEditingId(null);
    setForm(initialForm);
    setViewMode("editor");
    setMessage("");
  }

  function startEdit(post: AdminPost) {
    setEditingId(post.id);
    setForm({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      coverImage: post.cover_image,
      authorName: post.author_name,
      metaTitle: post.meta_title ?? "",
      metaDesc: post.meta_desc ?? "",
      metaKeyword: post.meta_keyword ?? "",
      status: post.status,
    });
    setViewMode("editor");
    setMessage("");
  }

  function backToList() {
    setEditingId(null);
    setForm(initialForm);
    setViewMode("list");
    setMessage("");
  }

  async function removePost(id: string) {
    const confirmed = globalThis.confirm("Delete this post?");
    if (!confirmed) {
      return;
    }

    const response = await fetch(`/api/admin/posts/${id}`, {
      method: "DELETE",
    });

    const result = (await response.json()) as { success: boolean; error?: string };

    if (!response.ok || !result.success) {
      setMessage(result.error ?? "Failed to delete post");
      return;
    }

    setMessage("Post deleted.");
    await fetchPosts();
  }

  return (
    <main className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#4c37a6]">Blog Posts</h1>
        <button
          onClick={logoutAdmin}
          className="rounded-lg border px-4 py-2 text-sm font-medium flex items-center gap-2"
        >
          <Shield className="h-4 w-4" />
          Logout
        </button>
      </div>

      {viewMode === "list" ? (
        <section className="rounded-xl border bg-white p-6 space-y-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-gray-600">Manage your blog posts</p>
            <button
              type="button"
              onClick={startCreate}
              className="rounded-lg bg-[#f15a2b] hover:bg-[#dd4f24] text-white px-5 py-2 font-medium flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Create Post
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-4">
            <div className="relative">
              <Search className="h-4 w-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search posts..."
                className="w-full border rounded-lg py-3 pl-10 pr-4"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(event) =>
                setStatusFilter(event.target.value as "all" | "draft" | "published")
              }
              className="border rounded-lg py-3 px-3"
            >
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </div>

          {loading ? <p className="text-sm text-gray-600">Loading posts...</p> : null}

          {!loading && paginatedPosts.length === 0 ? (
            <p className="text-sm text-gray-600">No posts found.</p>
          ) : null}

          <div className="space-y-4">
            {paginatedPosts.map((post) => (
              <article key={post.id} className="rounded-xl border p-5">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">{post.title}</h3>
                    <p className="mt-2 text-gray-600">{post.excerpt || "No excerpt added."}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          post.status === "published"
                            ? "bg-green-100 text-green-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {post.status === "published" ? "Published" : "Draft"}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-6 text-lg font-medium">
                    <button
                      type="button"
                      onClick={() => startEdit(post)}
                      className="text-gray-900 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => removePost(post.id)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <p className="text-sm text-gray-500">
              Showing {paginatedPosts.length} of {filteredPosts.length} posts
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={currentPage <= 1}
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                className="rounded border px-3 py-1 disabled:opacity-50"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="text-sm">
                Page {Math.min(currentPage, totalPages)} of {totalPages}
              </span>
              <button
                type="button"
                disabled={currentPage >= totalPages}
                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                className="rounded border px-3 py-1 disabled:opacity-50"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section className="rounded-xl border bg-white p-6 space-y-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-[#4c37a6] leading-tight">
                {editingId ? "Edit Blog Post" : "Write Blog"}
              </h2>
              <p className="text-base text-gray-500 mt-1">
                {editingId ? "Update your existing blog post" : "Create a new blog post"}
              </p>
            </div>
            <button
              type="button"
              onClick={backToList}
              className="flex items-center gap-1 rounded-lg border px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 shrink-0"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to List
            </button>
          </div>

          <form onSubmit={handleSavePost} className="space-y-5">
            <div>
              <label htmlFor="post-title" className="block mb-2 text-lg font-semibold">
                Post Title *
              </label>
              <input
                id="post-title"
                placeholder="Enter post title..."
                value={form.title}
                onChange={(event) => setForm((prev) => ({ ...prev, title: event.target.value }))}
                className="w-full border rounded-lg px-4 py-3"
                required
              />
            </div>

            <div>
              <label htmlFor="post-slug" className="block mb-2 text-lg font-semibold">
                URL Slug
              </label>
              <input
                id="post-slug"
                placeholder="post-slug"
                value={form.slug}
                onChange={(event) => setForm((prev) => ({ ...prev, slug: event.target.value }))}
                className="w-full border rounded-lg px-4 py-3"
              />
              <p className="text-sm text-gray-500 mt-1">
                URL-friendly identifier. Auto-generated from title if left empty.
              </p>
            </div>

            <div>
              <label htmlFor="post-excerpt" className="block mb-2 text-lg font-semibold">
                Excerpt
              </label>
              <textarea
                id="post-excerpt"
                placeholder="Brief description of the post..."
                value={form.excerpt}
                onChange={(event) => setForm((prev) => ({ ...prev, excerpt: event.target.value }))}
                className="w-full border rounded-lg px-4 py-3 min-h-28"
              />
              <p className="text-sm text-gray-500 mt-1">A short preview text for the post</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="cover-url" className="block mb-2 text-lg font-semibold">
                  Cover Image URL *
                </label>
                <input
                  id="cover-url"
                  placeholder="https://..."
                  value={form.coverImage}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, coverImage: event.target.value }))
                  }
                  className="w-full border rounded-lg px-4 py-3"
                  required
                />
              </div>

              <div>
                <label htmlFor="cover-upload" className="block mb-2 text-lg font-semibold">
                  Upload Cover
                </label>
                <div className="flex items-center gap-3 border rounded-lg px-3 py-3">
                  <input
                    id="cover-upload"
                    type="file"
                    accept="image/png,image/jpeg,image/webp,image/gif"
                    onChange={handleCoverImageUpload}
                    className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#f15a2b]/10 file:text-[#f15a2b] hover:file:bg-[#f15a2b]/20 cursor-pointer"
                  />
                  <span className="text-xs text-gray-500">
                    {uploadingImage ? "Uploading..." : "Upload image"}
                  </span>
                </div>
              </div>
            </div>

            {form.coverImage && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <p className="block mb-2 text-sm font-semibold text-gray-600">Cover Preview</p>
                <div className="relative w-full max-w-sm aspect-video rounded-lg overflow-hidden border border-gray-200 bg-gray-50 shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={form.coverImage}
                    alt="Cover preview"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="post-author" className="block mb-2 text-lg font-semibold">
                  Author *
                </label>
                <input
                  id="post-author"
                  placeholder="Author name"
                  value={form.authorName}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, authorName: event.target.value }))
                  }
                  className="w-full border rounded-lg px-4 py-3"
                  required
                />
              </div>

              <div>
                <label htmlFor="post-status" className="block mb-2 text-lg font-semibold">
                  Status
                </label>
                <select
                  id="post-status"
                  value={form.status}
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      status: event.target.value as "draft" | "published",
                    }))
                  }
                  className="w-full border rounded-lg px-4 py-3"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="meta-title" className="block mb-2 text-lg font-semibold">
                  Meta Title
                </label>
                <input
                  id="meta-title"
                  placeholder="SEO meta title (optional)"
                  value={form.metaTitle}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, metaTitle: event.target.value }))
                  }
                  className="w-full border rounded-lg px-4 py-3"
                  maxLength={180}
                />
              </div>

              <div>
                <label htmlFor="meta-desc" className="block mb-2 text-lg font-semibold">
                  Meta Description
                </label>
                <textarea
                  id="meta-desc"
                  placeholder="SEO meta description (optional)"
                  value={form.metaDesc}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, metaDesc: event.target.value }))
                  }
                  className="w-full border rounded-lg px-4 py-3 min-h-24"
                  maxLength={320}
                />
              </div>

              <div>
                <label htmlFor="meta-keyword" className="block mb-2 text-lg font-semibold">
                  Meta Keywords
                </label>
                <input
                  id="meta-keyword"
                  placeholder="keyword1, keyword2, keyword3 (optional)"
                  value={form.metaKeyword}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, metaKeyword: event.target.value }))
                  }
                  className="w-full border rounded-lg px-4 py-3"
                  maxLength={500}
                />
              </div>
            </div>

            <div>
              <p className="block mb-2 text-lg font-semibold">Content *</p>
              <RichTextEditor
                value={form.content}
                onChange={(nextValue) => setForm((prev) => ({ ...prev, content: nextValue }))}
              />
            </div>

            <div className="flex items-center gap-3">
              <button
                disabled={saving}
                type="submit"
                className="rounded-lg bg-[#f15a2b] hover:bg-[#dd4f24] text-white px-6 py-2 disabled:opacity-60"
              >
                {submitLabel}
              </button>
              <button
                type="button"
                onClick={backToList}
                className="rounded-lg border px-6 py-2"
              >
                Back to List
              </button>
            </div>
          </form>
        </section>
      )}

      {message ? <p className="text-sm text-gray-700">{message}</p> : null}
    </main>
  );
}
