export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-black text-center text-zinc-500 text-sm">
      <p>&copy; {new Date().getFullYear()} Md. Arman Hossain. All rights reserved.</p>
      <p className="mt-1">Built with Next.js, Tailwind CSS & Framer Motion.</p>
    </footer>
  );
}
