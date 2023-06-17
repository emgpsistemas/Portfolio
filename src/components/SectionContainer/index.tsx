function SectionContainer({
  children,
  isBlueBackground = false,
  id,
}: {
  children: React.ReactNode;
  isBlueBackground?: boolean;
  id?: string;
}) {
  return (
    <>
      {isBlueBackground ? (
        <section className="min-h-screen w-full bg-background-blue" id={id}>
          <div className="mx-auto w-full max-w-6xl px-10 py-32 md:px-20 lg:p-32">
            {children}
          </div>
        </section>
      ) : (
        <section
          className="mx-auto min-h-screen w-screen max-w-6xl px-10 py-32 md:px-20 lg:p-32"
          id={id}
        >
          {children}
        </section>
      )}
    </>
  );
}

export default SectionContainer;
