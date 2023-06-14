function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex justify-center">
      <h1 className="text-[32px] font-bold leading-relaxed md:text-6xl lg:text-[76px]">
        {title}
      </h1>
    </div>
  );
}

export default SectionTitle;
