import Container from "../common/Container";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white mt-16">
      <Container className="py-8">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold">🛒 বাজার দর</h3>
            <p className="text-sm text-green-200 mt-1">প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
          </div>
          <div className="text-sm text-green-200 md:text-right">
            সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
          </div>
        </div>
        <div className="border-t border-green-700 mt-6 pt-4 text-center text-xs text-green-300">
          © {new Date().getFullYear()} বাজার দর — All rights reserved.
        </div>
      </Container>
    </footer>
  );
}