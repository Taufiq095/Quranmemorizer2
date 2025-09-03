// src/components/ArabicLine.tsx
export function ArabicLine({ children }: { children: React.ReactNode }) {
  return (
    <div className="arabic-line" lang="ar" dir="rtl">
      {children}
    </div>
  );
}