export default function Footer() {
  return (
    <footer className="relative w-full mt-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-turquoise/40 to-transparent" />
      <div className="bg-gradient-to-b from-card-bg/60 to-background/95 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 text-center text-xs sm:text-sm space-y-3 text-text/70">
          <p className="text-text font-semibold tracking-wide">
            &copy; {new Date().getFullYear()} Elisabeth Nejedli
          </p>
          <p>
            <strong className="text-turquoise font-semibold">
              Notice according to § 5 TMG and § 18 (3) MStV:
            </strong>
          </p>
          <p className="max-w-2xl mx-auto leading-relaxed">
            This website is a purely private, non-commercial project and serves
            exclusively for personal presentation and information. It pursues no
            economic interests.
          </p>
          <p className="max-w-2xl mx-auto leading-relaxed">
            According to § 5 of the Telemedia Act (TMG) and § 18 (3) of the
            State Media Treaty (MStV), there is therefore no obligation to
            provide an imprint.
          </p>
          <p className="max-w-2xl mx-auto leading-relaxed">
            No personal data is collected, no cookies are set, and no tracking
            or analytics tools are used.
          </p>
        </div>
      </div>
    </footer>
  );
}
