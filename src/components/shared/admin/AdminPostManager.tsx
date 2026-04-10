"use client";

import RichTextEditor from "@/components/shared/admin/RichTextEditor";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronLeft,
    ChevronRight,
    Plus,
    Search,
    LogOut,
    Eye,
    Trash2,
    X,
    FileText,
    Image as ImageIcon,
    Settings,
    Pencil,
    ArrowLeft,
    Calendar,
    UserCircle,
    CheckCircle2,
    Clock
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

const PAGE_SIZE = 6;

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

  // Auto-hide toast messages
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

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
    setMessage("Image uploaded successfully.");
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
    setMessage(isEditing ? "Changes saved." : "Post published.");
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

  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  async function removePost(id: string) {
    setSaving(true);
    const response = await fetch(`/api/admin/posts/${id}`, { method: "DELETE" });
    const result = (await response.json()) as { success: boolean; error?: string };
    if (!response.ok || !result.success) {
      setMessage(result.error ?? "Delete failed");
      setSaving(false);
      return;
    }
    setMessage("Post permanently removed.");
    setDeleteConfirmId(null);
    await fetchPosts();
    setSaving(false);
  }

  return (
    <main className="min-h-screen bg-[#f8f9fa] pb-20">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-30 w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-white font-bold text-lg">
              M
            </div>
            <span className="font-bold text-gray-900 tracking-tight text-lg">Manthan Admin</span>
          </div>
          
          <button
            onClick={logoutAdmin}
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
          >
            <LogOut size={18} />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-8">
        {/* View Selection & Page Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-200 pb-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-black text-gray-900">
              {viewMode === "list" ? "Blog Repository" : editingId ? "Refine Post" : "Compose New Post"}
            </h1>
            <p className="text-gray-500 font-medium">
              {viewMode === "list" 
                ? `Overseeing ${posts.length} entries across the catalog` 
                : "Drafting premium architectural content"}
            </p>
          </div>

          {viewMode === "list" ? (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={startCreate}
              className="bg-black text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-black/10 hover:shadow-black/20 transition-all"
            >
              <Plus size={20} />
              Create New Entry
            </motion.button>
          ) : (
            <button
              onClick={() => setViewMode("list")}
              className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all"
            >
              <ArrowLeft size={18} />
              Cancel & Return
            </button>
          )}
        </div>

        {viewMode === "list" ? (
          <div className="space-y-6">
            {/* Toolbar */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-4">
              <div className="relative group">
                <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors" />
                <input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by title, slug, or content..."
                  className="w-full bg-white border border-gray-200 rounded-2xl py-3.5 pl-12 pr-4 focus:outline-none focus:ring-4 focus:ring-black/5 focus:border-black transition-all"
                />
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
                className="bg-white border border-gray-200 rounded-2xl py-3.5 px-4 font-bold text-gray-700 focus:outline-none focus:ring-4 focus:ring-black/5 transition-all appearance-none cursor-pointer"
              >
                <option value="all">All Content</option>
                <option value="published">Published</option>
                <option value="draft">Drafts Only</option>
              </select>
            </div>

            {/* List Components */}
            <AnimatePresence mode="popLayout">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-20 gap-4">
                  <div className="w-12 h-12 border-4 border-gray-100 border-t-black rounded-full animate-spin" />
                  <p className="text-gray-400 font-medium animate-pulse">Syncing Repository...</p>
                </div>
              ) : paginatedPosts.length === 0 ? (
                <div className="bg-white border-2 border-dashed border-gray-200 rounded-3xl py-20 text-center">
                  <FileText size={48} className="mx-auto text-gray-200 mb-4" />
                  <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest">Repository Empty</h3>
                  <button onClick={startCreate} className="mt-4 text-black font-bold hover:underline">Start your first post</button>
                </div>
              ) : (
                <motion.div 
                  className="grid grid-cols-1 gap-4"
                  layout
                >
                  {paginatedPosts.map((post) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      key={post.id}
                      className="group bg-white border border-gray-200 rounded-3xl p-4 md:p-5 flex flex-col md:flex-row items-center gap-6 hover:shadow-xl hover:shadow-black/5 transition-all hover:border-black/10"
                    >
                      {/* Thumbnail */}
                      <div className="w-full md:w-48 aspect-video rounded-2xl overflow-hidden bg-gray-50 flex-shrink-0 relative border border-gray-100">
                        {post.cover_image ? (
                          <img src={post.cover_image} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-300">
                            <ImageIcon size={32} />
                          </div>
                        )}
                        <div className="absolute top-2 right-2">
                          <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider shadow-sm ${
                            post.status === "published" ? "bg-green-500 text-white" : "bg-amber-500 text-white"
                          }`}>
                            {post.status === "published" ? <CheckCircle2 size={10} /> : <Clock size={10} />}
                            {post.status}
                          </span>
                        </div>
                      </div>

                      {/* Content Info */}
                      <div className="flex-1 min-w-0 space-y-2 text-center md:text-left">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-black transition-colors truncate">
                          {post.title}
                        </h3>
                        <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">
                          {post.excerpt || "No entry summary available."}
                        </p>
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-semibold text-gray-400">
                          <span className="flex items-center gap-1">
                            <UserCircle size={14} /> {post.author_name}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={14} /> {new Date(post.created_at || "").toLocaleDateString()}
                          </span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2 border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6">
                        <button
                          onClick={() => startEdit(post)}
                          className="p-3 text-gray-600 hover:text-black hover:bg-gray-100 rounded-xl transition-all"
                          title="Edit Post"
                        >
                          <Pencil size={20} />
                        </button>
                        <button
                          onClick={() => setDeleteConfirmId(post.id)}
                          className="p-3 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                          title="Remove Entry"
                        >
                          <Trash2 size={22} />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Pagination UI */}
            <div className="flex items-center justify-between pt-8 border-t border-gray-200">
              <p className="text-sm font-bold text-gray-400">
                Visualizing <span className="text-gray-900">{paginatedPosts.length}</span> of <span className="text-gray-900">{filteredPosts.length}</span> Catalog Items
              </p>
              
              <div className="flex items-center gap-2">
                <button
                  disabled={currentPage <= 1}
                  onClick={() => setCurrentPage((p) => p - 1)}
                  className="p-2 border border-gray-200 rounded-xl hover:bg-white hover:border-black disabled:opacity-30 disabled:hover:bg-transparent transition-all"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="bg-white border border-gray-200 px-4 py-2 rounded-xl flex items-center gap-2">
                    <span className="font-black text-sm">{currentPage}</span>
                    <span className="text-gray-300">/</span>
                    <span className="text-gray-400 text-xs font-bold">{totalPages}</span>
                </div>
                <button
                  disabled={currentPage >= totalPages}
                  onClick={() => setCurrentPage((p) => p + 1)}
                  className="p-2 border border-gray-200 rounded-xl hover:bg-white hover:border-black disabled:opacity-30 disabled:hover:bg-transparent transition-all"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* EDITOR VIEW */
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <form id="post-form" onSubmit={handleSavePost} className="space-y-8">
              {/* Main Content Section */}
              <section className="bg-white border border-gray-200 rounded-3xl p-6 md:p-10 space-y-8 shadow-sm">
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Post Title *</label>
                  <input
                    placeholder="E.g., Modernist Villa in Gurgaon"
                    value={form.title}
                    onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
                    className="w-full text-2xl md:text-4xl font-black placeholder:text-gray-100 border-b border-gray-100 pb-2 focus:border-black focus:outline-none transition-all"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">URL Slug</label>
                    <input
                      placeholder="post-url-slug"
                      value={form.slug}
                      onChange={(e) => setForm((p) => ({ ...p, slug: e.target.value }))}
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm focus:border-black focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">Author Name *</label>
                    <input
                      placeholder="Enter author..."
                      value={form.authorName}
                      onChange={(e) => setForm((p) => ({ ...p, authorName: e.target.value }))}
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm focus:border-black focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Excerpt / Summary</label>
                  <textarea
                    placeholder="Brief architectural overview..."
                    value={form.excerpt}
                    onChange={(e) => setForm((p) => ({ ...p, excerpt: e.target.value }))}
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 text-gray-600 focus:border-black focus:outline-none min-h-[120px]"
                  />
                </div>

                {/* Cover Image Section */}
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Featured Web Cover</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="aspect-video rounded-2xl bg-gray-50 border-2 border-dashed border-gray-200 relative overflow-hidden group">
                        {form.coverImage ? (
                          <>
                            <img src={form.coverImage} className="w-full h-full object-cover" alt="Preview"/>
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer">
                              <label className="cursor-pointer text-white font-black text-[10px] uppercase tracking-widest bg-black/20 px-3 py-2 rounded-lg backdrop-blur-md">
                                Change Image
                                <input type="file" className="hidden" onChange={handleCoverImageUpload} />
                              </label>
                            </div>
                          </>
                        ) : (
                          <label className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                            <Plus className="text-gray-300 mb-2" />
                            <span className="text-[10px] font-black text-gray-400 uppercase">Upload Media</span>
                            <input type="file" className="hidden" onChange={handleCoverImageUpload} />
                          </label>
                        )}
                        {uploadingImage && (
                          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center">
                            <div className="w-6 h-6 border-2 border-gray-100 border-t-black rounded-full animate-spin" />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col justify-center space-y-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase">Image URL Link</label>
                        <input
                          value={form.coverImage}
                          onChange={(e) => setForm((p) => ({ ...p, coverImage: e.target.value }))}
                          className="w-full border border-gray-100 rounded-xl p-3 text-xs font-mono"
                          placeholder="https://..."
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase">Publication Status</label>
                        <select
                          value={form.status}
                          onChange={(e) => setForm((p) => ({ ...p, status: e.target.value as any }))}
                          className="w-full border border-gray-100 rounded-xl p-3 font-bold text-sm bg-white"
                        >
                          <option value="draft">Save as Draft</option>
                          <option value="published">Publish Live</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Blog Body Content</label>
                  <div className="border border-gray-100 rounded-2xl overflow-visible shadow-sm">
                    <RichTextEditor
                      value={form.content}
                      onChange={(val) => setForm((p) => ({ ...p, content: val }))}
                    />
                  </div>
                </div>
              </section>

              {/* SEO Refinement Section */}
              <section className="bg-white border border-gray-200 rounded-3xl p-6 md:p-10 space-y-6 shadow-sm">
                <div className="flex items-center gap-2 border-b border-gray-100 pb-4">
                  <Settings size={20} className="text-gray-400" />
                  <h2 className="text-lg font-black uppercase tracking-tight">Search Optimization</h2>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">Meta Title</label>
                    <input
                      value={form.metaTitle}
                      onChange={(e) => setForm((p) => ({ ...p, metaTitle: e.target.value }))}
                      className="w-full border border-gray-100 rounded-xl p-4 focus:border-black focus:outline-none"
                      placeholder="SEO optimized title..."
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">Meta Description</label>
                    <textarea
                      value={form.metaDesc}
                      onChange={(e) => setForm((p) => ({ ...p, metaDesc: e.target.value }))}
                      className="w-full border border-gray-100 rounded-xl p-4 min-h-[100px] focus:border-black focus:outline-none"
                      placeholder="SEO optimized description..."
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">Meta Keywords</label>
                    <input
                      value={form.metaKeyword}
                      onChange={(e) => setForm((p) => ({ ...p, metaKeyword: e.target.value }))}
                      className="w-full border border-gray-100 rounded-xl p-4 focus:border-black focus:outline-none"
                      placeholder="keyword1, keyword2, keyword3..."
                    />
                  </div>
                </div>
              </section>

              {/* Final Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 pb-20">
                <button
                  disabled={saving}
                  type="submit"
                  className="w-full sm:w-auto min-w-[200px] bg-black text-white py-4 px-10 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-gray-800 disabled:opacity-50 transition-all shadow-xl shadow-black/10"
                >
                  {saving ? "Processing..." : editingId ? "Save Changes" : "Confirm & Publish"}
                </button>
                <button 
                  type="button"
                  onClick={() => setViewMode("list")}
                  className="w-full sm:w-auto py-4 px-10 text-xs font-black text-gray-400 uppercase hover:text-red-500 transition-colors"
                >
                  Discard Draft
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </div>

      {/* Premium Deletion Modal */}
      <AnimatePresence>
        {deleteConfirmId && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDeleteConfirmId(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-[20px] shadow-2xl overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl font-black text-[#5e2ced]">Delete Post</h2>
                  <button 
                    onClick={() => setDeleteConfirmId(null)}
                    className="p-1 text-gray-400 hover:text-black transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                <p className="text-gray-500 font-medium leading-relaxed mb-10">
                  Are you sure you want to delete this post? This action cannot be undone.
                </p>
                <div className="flex items-center justify-end gap-3">
                  <button
                    onClick={() => setDeleteConfirmId(null)}
                    className="px-8 py-3 rounded-xl border border-gray-200 text-gray-700 font-bold hover:bg-gray-50 transition-all min-w-[120px]"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => removePost(deleteConfirmId)}
                    disabled={saving}
                    className="px-8 py-3 rounded-xl bg-[#ef4444] text-white font-black hover:bg-red-600 transition-all min-w-[120px] shadow-lg shadow-red-200"
                  >
                    {saving ? "Deleting..." : "Delete"}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Status Message */}
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 bg-black text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-md border border-white/10"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-bold tracking-tight">{message}</span>
            <button onClick={() => setMessage("")} className="ml-4 text-white/40 hover:text-white">&times;</button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
