import { useEffect, useState } from 'react';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

GlobalWorkerOptions.workerSrc = pdfWorker;

export function PdfThumbnailImage({ fileUrl, alt, className = '', scale = 1.6 }) {
  const [thumbnail, setThumbnail] = useState('');
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    const renderPreview = async () => {
      try {
        const loadingTask = getDocument(fileUrl);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        if (!context) {
          throw new Error('Canvas context unavailable');
        }

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({
          canvasContext: context,
          viewport,
        }).promise;

        if (active) {
          setThumbnail(canvas.toDataURL('image/png'));
        }
      } catch {
        if (active) {
          setFailed(true);
        }
      }
    };

    renderPreview();
    return () => {
      active = false;
    };
  }, [fileUrl, scale]);

  if (failed) {
    return (
      <div className={`flex items-center justify-center bg-[var(--surface-tertiary)] text-sm text-[var(--text-muted)] ${className}`}>
        Preview unavailable
      </div>
    );
  }

  if (!thumbnail) {
    return <div className={`animate-pulse bg-[var(--surface-tertiary)] ${className}`} />;
  }

  return <img src={thumbnail} alt={alt} className={className} />;
}
