export default function MembersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {children}
    </div>
  );
} 