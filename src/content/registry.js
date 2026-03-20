function toTitleCaseFromFileName(fileName) {
  const cleanName = fileName
    .replace(/\.[^/.]+$/, '')
    .replace(/[_-]+/g, ' ')
    .trim();

  return cleanName
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function getYearFromName(fileName) {
  const match = fileName.match(/\b(20\d{2})\b/);
  return match ? match[1] : 'Recent';
}

function getExt(fileName) {
  return fileName.split('.').pop()?.toLowerCase() ?? '';
}

function isPdf(fileName) {
  return getExt(fileName) === 'pdf';
}

function byNameAsc([a], [b]) {
  return a.localeCompare(b);
}

const certificateModules = import.meta.glob('./certificates/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP,avif,AVIF,gif,GIF,pdf,PDF}', {
  eager: true,
  import: 'default',
});

const resumeModules = import.meta.glob('./resume/*.{pdf,PDF,png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP,avif,AVIF,gif,GIF}', {
  eager: true,
  import: 'default',
});

export function getDynamicCertificates() {
  return Object.entries(certificateModules)
    .sort(byNameAsc)
    .map(([path, url]) => {
      const fileName = path.split('/').pop() ?? 'certificate';
      const pdf = isPdf(fileName);
      return {
        title: toTitleCaseFromFileName(fileName),
        subtitle: pdf ? 'Uploaded certificate document' : 'Uploaded certificate image',
        meta: pdf ? 'PDF' : 'IMAGE',
        date: getYearFromName(fileName),
        description: 'Click to open the original certificate file.',
        image: pdf ? null : url,
        fileUrl: url,
        fileType: pdf ? 'pdf' : 'image',
      };
    });
}

export function getDynamicResume() {
  const items = Object.entries(resumeModules).sort(byNameAsc);
  if (!items.length) {
    return null;
  }

  const pdfEntry = items.find(([path]) => isPdf(path));
  const previewEntry = items.find(([path]) => !isPdf(path));
  const chosenEntry = pdfEntry ?? items[0];
  const fileName = chosenEntry[0].split('/').pop() ?? 'resume.pdf';

  return {
    fileUrl: chosenEntry[1],
    fileName,
    fileType: isPdf(chosenEntry[0]) ? 'pdf' : 'image',
    previewUrl: previewEntry ? previewEntry[1] : isPdf(chosenEntry[0]) ? null : chosenEntry[1],
  };
}
