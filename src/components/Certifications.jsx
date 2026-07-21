import { useState, useCallback } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Award, FileText, ExternalLink, ShieldCheck, TrendingUp, ClipboardList, Users, Truck, Code, Lightbulb, GraduationCap, X, Eye, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Loader2 } from 'lucide-react';
import { profile } from '../data';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const iconMap = {
  ShieldCheck, TrendingUp, ClipboardList, Users, Truck, Code, Lightbulb, GraduationCap, Award,
};

function PdfViewer({ file, certName }) {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.2);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const onDocumentLoadSuccess = useCallback(({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
    setLoading(false);
    setError(null);
  }, []);

  const onDocumentLoadError = useCallback((err) => {
    setError(err.message || 'Failed to load PDF');
    setLoading(false);
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      {/* PDF Toolbar */}
      <div className="flex items-center gap-3 mb-4 px-4 py-2 glass-card rounded-xl">
        <button
          onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
          disabled={pageNumber <= 1}
          className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-ronin-border transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={18} />
        </button>
        <span className="text-sm text-gray-400 min-w-[80px] text-center">
          {numPages > 0 ? `${pageNumber} / ${numPages}` : '—'}
        </span>
        <button
          onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))}
          disabled={pageNumber >= numPages}
          className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-ronin-border transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronRight size={18} />
        </button>
        <div className="w-px h-5 bg-ronin-border mx-1" />
        <button
          onClick={() => setScale(Math.max(0.5, scale - 0.2))}
          className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-ronin-border transition-colors"
        >
          <ZoomOut size={18} />
        </button>
        <span className="text-sm text-gray-400 min-w-[50px] text-center">{Math.round(scale * 100)}%</span>
        <button
          onClick={() => setScale(Math.min(3, scale + 0.2))}
          className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-ronin-border transition-colors"
        >
          <ZoomIn size={18} />
        </button>
      </div>

      {/* PDF Document */}
      <div className="overflow-auto max-h-[60vh] w-full flex justify-center rounded-lg bg-gray-800/30 p-4">
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 size={32} className="text-ronin-accent animate-spin mb-3" />
            <p className="text-sm text-gray-500">Loading PDF...</p>
          </div>
        )}
        {error && (
          <div className="flex flex-col items-center justify-center py-20">
            <p className="text-sm text-red-400 mb-3">Failed to load PDF</p>
            <a
              href={encodeURI(file)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-ronin-accent bg-ronin-accent/10 hover:bg-ronin-accent/20 transition-colors"
            >
              <ExternalLink size={16} />
              Open Directly
            </a>
          </div>
        )}
        <Document
          file={encodeURI(file)}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading={null}
          error={null}
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="shadow-2xl"
          />
        </Document>
      </div>
    </div>
  );
}

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewingCert, setViewingCert] = useState(null);

  const allCerts = profile.certificationCategories.flatMap(cat =>
    cat.certs.map(cert => ({ ...cert, category: cat.category, categoryIcon: cat.icon }))
  );

  const filteredCerts = activeCategory === 'all'
    ? allCerts
    : allCerts.filter(cert => cert.category === activeCategory);

  const totalCerts = allCerts.length;

  const isImage = (file) => file && file.match(/\.(png|jpg|jpeg|gif|webp)$/i);
  const isPdf = (file) => file && file.match(/\.pdf$/i);

  return (
    <section id="certifications" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-ronin-accent text-sm font-semibold uppercase tracking-widest mb-3">Credentials</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Certifications & Publications
        </h2>
        <p className="text-gray-400 mb-10 max-w-2xl">
          {totalCerts} professional certifications across HSE, marketing, project management, HR, supply chain, and more — plus published LinkedIn articles. Click "View Certification" to see the credential.
        </p>

        {/* Category filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeCategory === 'all'
                ? 'gradient-bg text-white'
                : 'glass-card text-gray-400 hover:text-white'
            }`}
          >
            All ({totalCerts})
          </button>
          {profile.certificationCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || Award;
            const count = cat.certs.length;
            return (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat.category
                    ? 'gradient-bg text-white'
                    : 'glass-card text-gray-400 hover:text-white'
                }`}
              >
                <Icon size={15} />
                {cat.category} ({count})
              </button>
            );
          })}
        </div>

        {/* Certifications grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {filteredCerts.map((cert, i) => {
            const Icon = iconMap[cert.categoryIcon] || Award;
            return (
              <div
                key={`${cert.name}-${i}`}
                className="glass-card rounded-xl p-5 hover:border-ronin-accent/30 transition-all duration-300 group flex flex-col"
              >
                <div className="flex items-start gap-4 flex-1">
                  {cert.image ? (
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border border-ronin-border">
                      <img src={cert.image} alt={cert.name} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-lg bg-ronin-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-ronin-accent/20 transition-colors">
                      <Icon size={20} className="text-ronin-accent" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white leading-snug mb-1">{cert.name}</p>
                    <p className="text-xs text-gray-500">{cert.org}</p>
                    <span className="text-[10px] font-medium text-ronin-purple mt-2 inline-block">
                      {cert.category}
                    </span>
                  </div>
                </div>
                {cert.file && (
                  <button
                    onClick={() => setViewingCert(cert)}
                    className="mt-4 flex items-center justify-center gap-2 w-full py-2 rounded-lg text-xs font-medium text-ronin-accent bg-ronin-accent/10 hover:bg-ronin-accent/20 transition-colors"
                  >
                    <Eye size={14} />
                    View Certification
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Publications section */}
        <div className="border-t border-ronin-border pt-12">
          <div className="flex items-center gap-3 mb-6">
            <FileText size={22} className="text-ronin-accent" />
            <h3 className="text-xl font-bold text-white">LinkedIn Articles & Publications</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {profile.publications.map((pub, i) => (
              <a
                key={i}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-4 hover:border-ronin-accent/30 transition-colors group block"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-white group-hover:text-ronin-accent transition-colors">
                      {pub.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{pub.date}</p>
                  </div>
                  <ExternalLink size={16} className="text-gray-600 group-hover:text-ronin-accent transition-colors flex-shrink-0 mt-0.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      {viewingCert && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setViewingCert(null)}
        >
          <div
            className="relative bg-ronin-card rounded-2xl border border-ronin-border max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between p-5 border-b border-ronin-border">
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-white truncate">{viewingCert.name}</h3>
                <p className="text-sm text-gray-500">{viewingCert.org} — {viewingCert.category}</p>
              </div>
              <button
                onClick={() => setViewingCert(null)}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-ronin-border transition-colors flex-shrink-0"
              >
                <X size={22} />
              </button>
            </div>

            {/* Modal body */}
            <div className="flex-1 overflow-auto p-5 flex items-center justify-center bg-ronin-dark/50">
              {isImage(viewingCert.file) ? (
                <img
                  src={encodeURI(viewingCert.file)}
                  alt={viewingCert.name}
                  className="max-w-full max-h-[70vh] rounded-lg object-contain"
                />
              ) : isPdf(viewingCert.file) ? (
                <PdfViewer file={viewingCert.file} certName={viewingCert.name} />
              ) : null}
            </div>

            {/* Modal footer */}
            <div className="p-4 border-t border-ronin-border flex justify-end">
              <a
                href={encodeURI(viewingCert.file)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-ronin-accent bg-ronin-accent/10 hover:bg-ronin-accent/20 transition-colors"
              >
                <ExternalLink size={16} />
                Open in New Tab
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
