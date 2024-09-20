import { html } from "uhtml";
import { artikel, lowonganMagang } from "@/data/list.js";
import banner from "@/assets/images/banner.png";
import bgulbi from "@/assets/images/logo_ulbi_dark.png";
import image1 from "@/assets/images/Frame 6.png";
import image2 from "@/assets/images/logo_ulbi.png";
import image3 from "@/assets/images/logo_bni.png";
import image4 from "@/assets/images/card_header.png";
import image5 from "@/assets/images/card_header_2.png";
import image6 from "@/assets/images/poster.png";
import "@/components/ui/ui-button";
import "@/components/ui/ui-card";
import "@/components/ui/ui-badge";
import "@/components/ui/ui-search";

export const MetaTitle = "Landing Page";
export const MetaDescription = "Description of this page";

const imageMap = {
  image1,
  image2,
  image3,
  image4,
  image5,
};

console.log(bgulbi);
export default async function Page() {
  return html`
    <div class="mx-16 my-8 flex flex-col gap-8 text-gray-500">
      <div><img src="${banner}" height="${577}" alt="banner" /></div>
      <div>
        <h1 class="text-lg font-bold">${MetaTitle}</h1>
      </div>
      <div class="text-3xl text-center font-bold text-black">Lowongan Magang</div>
      <div>
        <div class="p-4 flex flex-col gap-3 bg-gray-300/10 text-xs rounded-md border border-gray-300">
          <div class="font-semibold">Cari Berdasarkan Perusahaan, Pekerjaan dan Program Studi</div>
          <div><ui-search placeholder="Silahkan ketik pencarian Anda disini" buttonText="Cari"></ui-search></div>
          <div class="flex gap-3 justify-center items-center">
            <div class="font-semibold">Tampilkan filter</div>
            <div><iconify-icon icon="solar:alt-arrow-down-outline" width="22" class="text-gray-500"></div>
          </div>
        </div>
      </div>
      <div class="text-sm font-semibold">Total: ${lowonganMagang.length} Lowongan Magang</div>
      <div class="h-[500px] grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div class="flex flex-col gap-3 overflow-y-auto">
          ${lowonganMagang.map(
            (item) => html`
              <div>
                <div class="flex flex-row gap-3 rounded-lg border border-gray-300">
                  <div class="w-[120px] flex overflow-hidden rounded-l-lg">
                    <img class="object-center object-contain" src=${imageMap[item.picture]} height="[100px]" alt="image" />
                  </div>
                  <div class="p-4 flex flex-col gap-2 text-xs">
                    <div class="flex justify-between items-center">
                      <div>Diposting 2 Hari Yang Lalu</div>
                      <div><ui-badge class="bg-green-600/25 text-green-600" dot>${item.status}</ui-badge></div>
                    </div>
                    <div class="text-sm font-semibold">${item.title}</div>
                    <div class="flex justify-start items-center gap-2">
                      <iconify-icon icon="solar:buildings-bold-duotone" height="22" class="text-ulbiOrange"></iconify-icon>
                      <div>${item.company}</div>
                    </div>
                    <div class="flex justify-start items-center gap-2">
                      <iconify-icon icon="solar:map-point-bold-duotone" height="22" class="text-ulbiOrange"></iconify-icon>
                      <div>${item.location}</div>
                    </div>
                    <div class="flex justify-start items-center gap-2">
                      <iconify-icon icon="solar:calendar-bold-duotone" height="22" class="text-ulbiOrange"></iconify-icon>
                      <div>Batas Akhir Pendaftaran: ${item.date}</div>
                    </div>
                    <div class="flex justify-between items-center gap-2">
                      <div class="flex justify-start items-center gap-2">
                        <iconify-icon icon="solar:user-bold-duotone" height="22" class="text-ulbiOrange"></iconify-icon>
                        <div class="text-sm font-semibold">${item.applicants} Kandidat Mendaftar</div>
                      </div>
                      <div class="flex gap-2">
                        <ui-button variant="outline_orange" type="button" href="">Simpan</ui-button>
                        <ui-button color="orange" type="button" href="">Detail</ui-button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `
          )}
        </div>
        <div class="flex flex-col rounded-md border border-gray-300 text-xs">
          <div class="pt-4 px-4 flex justify-between items-center">
            <div>Diposting 2 Hari Yang Lalu</div>
            <div><ui-badge class="bg-green-600/25 text-green-600" dot>Aktif</ui-badge></div>
          </div>
          <div class="flex flex-row border-b border-gray-300">
            <div class="pl-2 w-[120px] flex overflow-hidden rounded-l-lg">
              <img class="object-center object-contain" src=${image1} height="[100px]" alt="image" />
            </div>
            <div class="p-4 flex flex-col gap-1">
              <div class="text-xl font-semibold">Global Finance Accounting Internship</div>
              <div class="flex justify-start items-center gap-2">
                <iconify-icon icon="solar:buildings-bold-duotone" height="22" class="text-ulbiOrange"></iconify-icon>
                <div>PT. Pos Indonesia</div>
              </div>
              <div class="flex justify-start items-center gap-2">
                <iconify-icon icon="solar:map-point-bold-duotone" height="22" class="text-ulbiOrange"></iconify-icon>
                <div>Bandung, Jawa Barat</div>
              </div>
              <div class="flex justify-start items-center gap-2">
                <iconify-icon icon="solar:calendar-bold-duotone" height="22" class="text-ulbiOrange"></iconify-icon>
                <div>Batas Akhir Pendaftaran: 6 September 2024</div>
              </div>
            </div>
          </div>
          <div class="pt-2 flex border-b border-gray-300"><img class="object-center object-contain" src=${image6} height="[100px]" alt="image" /></div>
          <div class="p-4 flex flex-wrap justify-between">
            <div><ui-button variant="outline_orange" type="button" href="">Simpan</ui-button></div>
            <div><ui-button color="orange" type="button" href="">Daftar</ui-button></div>
          </div>
        </div>
      </div>
      <div class="mt-16 p-4 rounded-md border border-gray-300">
        <div id="background-container" class="flex flex-col gap-3  bg-no-repeat bg-left-top bg-cover relative">
          <div class="text-xl text-black font-bold">Would You Want To Join Us</div>
          <div class="text-xs">
            Posting lowongan Anda langsung dari halaman member. Setiap saat dan kapan saja Anda membutuhkan talenta terbaik tinggal mengisi form yang telah kami
            sediakan secara online. Mudah dan cepat.
          </div>
          <div class="flex flex-warp justify-evenly items-center">
            <div><ui-button variant="outline_blue">REGISTER JOB SEEKER</ui-button></div>
            <div><ui-button variant="outline_blue">REGISTER EMPLOYER</ui-button></div>
            <div><ui-button variant="default">LOGIN</ui-button></div>
          </div>
        </div>
      </div>
      <div class="flex justify-center text-3xl text-black font-bold">Artikel</div>
      <div class="flex flex-row gap-4 overflow-x-auto">
        ${artikel.map(
          (item) => html`
            <div class="w-[450px] flex flex-col gap-2 border border-gray-300 rounded-lg">
              <div><img class="rounded-t-lg overflow-hidden w-[450px]" src="${imageMap[item.picture]}" alt="post" /></div>
              <div class="p-4 flex flex-col gap-3">
                <div class="text-xs">Dipublikasikan oleh <span class="font-bold">${item.author} | 6 September 2024 </span></div>
                <div class="text-xl text-blue-800 font-bold">${item.title}</div>
                <div class="text-md">${item.content}</div>
                <div class="flex justify-between items-center">
                  <ui-button color="orange" type="button" href="" class="text-xs font-medium"
                    >Read more <iconify-icon icon="formkit:arrowright" height="15"></iconify-icon
                  ></ui-button>
                  <div class="flex items-center gap-2">
                    <iconify-icon icon="solar:eye-bold" height="12"></iconify-icon>
                    <span class="text-xs">Dilihat <span class="font-bold">${item.views}</span> kali</span>
                  </div>
                </div>
              </div>
            </div>
          `
        )}
      </div>
    </div>
  `;
}

const bgContainer = document.getElementById("background-container");
if (bgContainer) {
  bgContainer.style.backgroundImage = `url('${bgulbi}')`;
}
export const Script = async () => {
  const searchComponent = document.querySelector("ui-search");

  if (searchComponent) {
    searchComponent.addEventListener("search", (event) => {
      const customEvent = /** @type {CustomEvent} */ (event); // Casting event to CustomEvent
      const keyword = customEvent.detail.keyword;
      console.log(`Searching for: ${keyword}`);

      // Logika pencarian dapat ditambahkan di sini
    });
  }
};
