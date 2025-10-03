export function WhereToFindUs({
  name = "Giuliano Restaurant",
  address = "Na Příkopech 257, 388 01 Blatná",
  mapUrl = "https://www.google.com/maps/place/Na+P%C5%99%C3%ADkopech+257,+388+01+Blatn%C3%A1,+Czechia/@49.423812,13.881512,14z/data=!4m6!3m5!1s0x470b3bfeabec1e99:0x9ee2d84673899609!8m2!3d49.4238117!4d13.8815116!16s%2Fg%2F11cskt_fvg?hl=en&entry=ttu&g_ep=EgoyMDI1MDkzMC4wIKXMDSoASAFQAw%3D%3D",
  showEmbed = true,
}) {
  return (
    <section className="max-w-4xl mx-auto pt-[100px]" id="Contact">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
        <div className="md:flex">
          {/* Left: text */}
          <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading text-gray-900 mb-2">
                Kde nás najdete
              </h3>

              <h4 className="text-lg font-semibold text-gray-700 mb-4">
                {name}
              </h4>

              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Přijďte ochutnat naše tradiční pečené pizzy v útulném prostředí.
                Najdete nás v centru města — ideální místo na oběd i večerní
                posezení s rodinou a přáteli.
              </p>

              <div className="text-sm text-gray-800 mb-6">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-red-600 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 21s7-4.5 7-10a7 7 0 10-14 0c0 5.5 7 10 7 10z"
                    />
                  </svg>
                  <div>
                    <div className="font-medium">{address}</div>
                    <div className="text-xs text-gray-500">
                      Parkování poblíž / dobrá dostupnost MHD
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white font-medium transition"
              >
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 20l-5.447-2.724A2 2 0 013 15.382V6.618a2 2 0 011.553-1.894L9 2m0 18l6-3V5l-6 3v12z"
                  />
                </svg>
                Otevřít v mapách
              </a>

              <a
                href={`tel:+420123456789`}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-gray-200 bg-white text-gray-800 hover:shadow"
              >
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h2.5a.5.5 0 01.5.5V6a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM21 19a2 2 0 01-2 2h-2.5a.5.5 0 01-.5-.5V18a2 2 0 012-2H19a2 2 0 012 2v1z"
                  />
                </svg>
                Zavolat
              </a>
            </div>
          </div>

          {/* Right: map embed (responsivní) */}
          <div className="md:w-1/2">
            {showEmbed ? (
              <div className="w-full h-64 md:h-full">
                <div >
                  <iframe
                   
                    className="w-[25rem] h-[20rem]"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Blatna%20Na%20P%C5%99%C3%ADkopech%20257+(Giuliano%20restaurant)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  >
                    <a href="https://www.mapsdirections.info/it/calcola-la-popolazione-su-una-mappa/">
                      città più popolate Italia mappa
                    </a>
                  </iframe>
                </div>
              </div>
            ) : (
              <div className="w-full h-64 md:h-full flex items-center justify-center bg-gray-50">
                <svg
                  className="w-24 h-24 text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 21s7-4.5 7-10a7 7 0 10-14 0c0 5.5 7 10 7 10z"
                  />
                </svg>
                <p className="text-sm text-gray-400 mt-2">
                  Klikněte na "Otevřít v mapách" pro navigaci
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
