'use client';

export default function Testimonial() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <blockquote className="text-3xl md:text-4xl font-light italic text-white dark:text-white leading-relaxed mb-8">
          "LeetGuard fundamentally changed how I code. It keeps me locked in when I need it most."
        </blockquote>
        <cite className="text-neutral-300 dark:text-neutral-300 text-lg not-italic">
          — Early Beta User
        </cite>
      </div>
    </section>
  );
}