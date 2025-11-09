import { useState } from "react";
import {
  Check,
  Clock3Icon,
  GiftIcon,
  PackageIcon,
  UsersIcon,
  XCircleIcon,
  Wallet,
  ReceiptIcon,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CreditCardIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function SubscriptionPlans() {
  const [employeeCount, setEmployeeCount] = useState(5);
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  const plans = [
    {
      id: "starter",
      name: "Başlangıç Paketi",
      price: 790,
      border: "2px solid #e5e7eb",
      buttonStyle: {
        backgroundColor: "white",
        color: "#111827",
        border: "2px solid #e5e7eb",
      },
      buttonHoverStyle: {
        backgroundColor: "#f9fafb",
        color: "#111827",
        border: "2px solid #d1d5db",
      },
      popular: false,
      description: "Küçük işletmeler ve başlangıç için ideal ",
      features: [
        "1 GB depolama alanı",
        "Organizasyon Şeması",
        "Şirket/Departman/Bölüm/Birim/Takım",
        "Dosya Yönetimi",
        "Terfi-Pozisyon Değişikliği",
        "Mesai Giriş Çıkış",
        "Lokasyon Doğrulama",
        "Yıllık İzin",
        "İzin Onay Süreci",
        "Puantaj Raporları",
      ],
    },
    {
      id: "standard",
      name: "Standart Paket",
      price: 890,
      border: "2px solid #002680",
      buttonStyle: { backgroundColor: "#002680", color: "white" },
      buttonHoverStyle: { backgroundColor: "#1E3A8A", color: "white" },
      popular: true,
      badge: "30 gün ücretsiz deneme",
      description: "Büyüyen ekipler için gelişmiş özellikler.",
      features: [
        "Tüm Başlangıç özellikleri",
        "+1 GB depolama alanı (Toplam 2 GB)",
        "QR Giriş-Çıkış",
        "Fazla Mesai",
        "Vardiya Planlama",
        "Vardiya Onay Süreci",
        "Kurum Özel İzinleri",
        "Onboarding & Offboarding",
        "Hizmet Talebi",
        "Araç Rezervasyon",
        "Anket ve Öneri Sistemi",
        "Hesap Kurulum Desteği",
        "Online Kullanım Eğitimi",
      ],
    },
    {
      id: "professional",
      name: "Profesyonel Paket",
      price: 990,
      border: "2px solid #e5e7eb",
      buttonStyle: {
        backgroundColor: "white",
        color: "#111827",
        border: "2px solid #e5e7eb",
      },
      buttonHoverStyle: {
        backgroundColor: "#f9fafb",
        color: "#111827",
        border: "2px solid #d1d5db",
      },
      popular: false,
      description: "Büyük organizasyonlar için tam kontrol.",
      features: [
        "Tüm Standart özellikleri",
        "+2 GB depolama alanı (Toplam 4 GB)",
        "Envanter Yönetimi",
        "Zimmet Talep",
        "Avans Yönetimi",
        "Avans Onay Süreci",
        "Masraf Yönetimi",
        "Masraf Onay Süreci",
        "Seyahat Yönetimi",
        "SMS İle Davetiye",
        "Ziyaretçi Giriş",
        "Hesap Kurulum Desteği",
        "Online Kullanım Eğitimi",
      ],
    },
  ];

  const calculatePrice = (basePrice: number) => {
    const total = basePrice * employeeCount;
    return billingPeriod === "yearly" ? Math.round(total * 0.85) : total;
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Banner Section */}
      <div className="w-full bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 relative overflow-hidden">
        {/* Background decorative circles */}
        <div className="absolute top-20 right-[-200px] w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-100px] right-24 w-96 h-96 bg-indigo-500/15 rounded-full blur-[100px]"></div>

        {/* Navigation Bar */}
        <nav className="relative z-10 flex items-center justify-between px-12 py-6">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-white tracking-tight">
              mobofis
            </h1>
          </div>

          <div className="flex items-center space-x-8">
            <a className="text-white/90 hover:text-white text-sm font-medium transition-colors">
              Mobofis Ne Yapar? ▾
            </a>
            <a className="text-white/90 hover:text-white text-sm font-medium transition-colors">
              Fiyatlandırma
            </a>
            <a className="text-white/90 hover:text-white text-sm font-medium transition-colors">
              Yardım Merkezi
            </a>
            <a className="text-white/90 hover:text-white text-sm font-medium transition-colors">
              Blog
            </a>
            <button className="px-5 py-2 text-white border border-white/30 rounded-md hover:bg-white/10 transition-colors text-sm font-medium">
              Giriş Yap
            </button>
            <button className="px-5 py-2 bg-white text-blue-900 rounded-md hover:bg-blue-50 transition-colors text-sm font-medium">
              Ücretsiz Deneyin
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative z-10 px-12 pt-24 pb-32">
          <div className="max-w-3xl">
            <h2 className="text-6xl font-bold text-white mb-6 leading-tight">
              Fiyatlandırma
            </h2>
            <p className="text-xl text-white/90">
              <span className="text-white font-bold">
                15 gün ücretsiz deneyin.
              </span>{" "}
              Kredi kartı gerekmez.
            </p>
          </div>
        </div>

        {/* Decorative circle on the right */}
        <div className="absolute top-24 right-36 w-[500px] h-[500px] border-[80px] border-blue-400/20 rounded-full"></div>
      </div>

      {/* Original Content */}
      <div className="w-full px-4 py-10 sm:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#111827] mb-4">
              Size Uygun Paketi Seçin
            </h1>
            <p className="text-lg text-[#6b7280]">
              İşletmenizin ihtiyaçlarına göre en uygun planı seçin.
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-14">
            {/* Çalışan Sayısı */}
            <div className="flex items-center gap-4">
              <label className="font-semibold text-[#374151]">
                Çalışan Sayısı:
              </label>
              <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2">
                <button
                  onClick={() =>
                    setEmployeeCount(Math.max(1, employeeCount - 1))
                  }
                  className="px-3 py-1 text-lg font-bold hover:text-[#002680]"
                >
                  −
                </button>
                <input
                  type="number"
                  value={employeeCount}
                  onChange={(e) =>
                    setEmployeeCount(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  className="w-16 text-center font-semibold outline-none"
                />
                <button
                  onClick={() => setEmployeeCount(employeeCount + 1)}
                  className="px-3 py-1 text-lg font-bold hover:text-[#002680]"
                >
                  +
                </button>
              </div>
            </div>

            {/* Faturalama Dönemi */}
            <div className="flex items-center gap-4">
              <div className="bg-white border border-gray-200 rounded-2xl p-1 flex">
                <button
                  onClick={() => setBillingPeriod("monthly")}
                  className={`px-5 py-2 rounded-xl font-semibold transition-all ${
                    billingPeriod === "monthly"
                      ? "bg-[#002680] text-white"
                      : "text-[#6b7280] hover:text-[#002680]"
                  }`}
                >
                  Aylık
                </button>
                <button
                  onClick={() => setBillingPeriod("yearly")}
                  className={`px-5 py-2 rounded-xl font-semibold transition-all ${
                    billingPeriod === "yearly"
                      ? "bg-[#002680] text-white"
                      : "text-[#6b7280] hover:text-[#002680]"
                  }`}
                >
                  Yıllık
                </button>
              </div>
              <p className="text-sm text-[#002680]">Yıllık %15 tasarruf edin</p>
            </div>
          </div>

          {/* Planlar */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 bg-white shadow-sm hover:shadow-lg transition-all duration-300 border ${
                  plan.popular
                    ? "border-[#002680] border-2"
                    : "border-gray-200 border-2"
                }`}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#111827] mb-2">
                    {plan.popular ? (
                      <div className="flex gap-2  justify-center">
                        {plan.name}
                        <Badge
                          variant="secondary"
                          className="bg-[#002680] text-white"
                        >
                          Tavsiye Edilen
                        </Badge>
                      </div>
                    ) : (
                      <>{plan.name}</>
                    )}
                  </h3>
                  <p className="text-[#6b7280] text-sm">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-[#111827]">
                    ₺{calculatePrice(plan.price).toLocaleString("tr-TR")}
                  </span>
                  <span className="text-sm text-[#6b7280]">
                    /{billingPeriod === "monthly" ? "ay" : "yıl"}
                  </span>
                </div>

                <button
                  className="w-full py-3 rounded-xl font-semibold transition-all duration-200"
                  style={plan.buttonStyle}
                  onMouseEnter={(e) =>
                    Object.assign(e.currentTarget.style, plan.buttonHoverStyle)
                  }
                  onMouseLeave={(e) =>
                    Object.assign(e.currentTarget.style, plan.buttonStyle)
                  }
                >
                  Ücretsiz Dene
                </button>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#1aae39] mt-0.5 flex-shrink-0" />
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="text-sm text-[#374151] cursor-help border-b-2 border-dotted border-gray-400">
                            {f}
                          </span>
                        </TooltipTrigger>
                        <TooltipContent>Lorem Ipsum</TooltipContent>
                      </Tooltip>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Accordion Section */}
          <div className="m-6">
            <h1 className="text-4xl font-bold">Sıkça Sorulan Sorular</h1>
          </div>
          <div className="mt-16 sm:mt-10 md:mt-12 text-start px-4 max-w-4xl mx-auto">
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="flex items-start gap-2 text-left">
                  <GiftIcon className="w-6 h-6 text-[#002680]" />
                  <span>Mobofis'i ücretsiz deneyebilir miyim?</span>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Evet, personel yönetimi ve insan kaynakları süreçlerini
                    tamamen dijitalde kurulum maliyetine girmeden takip etmek
                    için Mobofis'i önce 15 gün ücretsiz olarak deneyebilirsiniz.
                  </p>
                  <p>
                    Mobofis'i faydalı bulur ve devam etmek isterseniz paketinizi
                    belirleyip aboneliğinizi başlatabilirsiniz. Bu süre boyunca
                    hiçbir ücret ödemezsiniz ve tüm temel özelliklere erişiminiz
                    olur. Ücretsiz deneme süresi sonunda, ihtiyacınıza uygun bir
                    pakete geçiş yapabilirsiniz.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <PackageIcon className="w-6 h-6 text-[#002680]" />
                  Mobofis paketine neler dahil?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Seçtiğiniz pakete bağlı olarak; personel yönetimi, izin
                    yönetimi, şirket yapısı oluşturma, görev takibi, PDKS
                    entegrasyonu, vardiya planlama, puantaj çizelgesi, mesai
                    takibi ve mesai ücret hesaplamaları ve daha birçok dijital
                    ofis özelliğine erişebilirsiniz.
                  </p>
                  <p>
                    Tüm özellikleri karşılaştırmak için paket detaylarını
                    inceleyebilirsiniz.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <CreditCardIcon className="w-6 h-6 text-[#002680]" />
                  Kredi kartı bilgisi girmeden deneme yapabilir miyim?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Evet, Mobofis'i denemek için kredi kartı bilgisi girmeniz
                    gerekmez.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  <Clock3Icon className="w-6 h-6 text-[#002680]" />
                  Deneme süresi sonunda otomatik ödeme başlar mı?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Evet. Ücretsiz deneme süresi sonunda kartınız tanımlıysa
                    ödeme otomatik olarak alınır. Deneme süresi sona erdiğinde,
                    sistem sizi uygun bir paket seçmeniz için bilgilendirir.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  <XCircleIcon className="w-6 h-6 text-[#002680]" />
                  Mobofis'i iptal etmek kolay mı?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Evet, Mobofis üyeliğinizi istediğiniz zaman paneliniz
                    üzerinden kolayca iptal edebilirsiniz. Herhangi bir taahhüt
                    yoktur.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  <Wallet className="w-6 h-6 text-[#002680]" />
                  Ödeme yöntemleri nelerdir?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Mobofis şu anda kredi kartı ile ödeme kabul etmektedir.
                    Havale/EFT gibi alternatif yöntemler için bizimle iletişime
                    geçiniz.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>
                  <UsersIcon className="w-6 h-6 text-[#002680]" />
                  Kurumsal teklifler veya toplu kullanıcılar için özel indirim
                  var mı?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Evet. 100+ kullanıcıya sahip işletmeler veya özel kurumsal
                    çözümler için özelleştirilmiş teklifler sunuyoruz. Bize
                    ulaşarak detaylı bilgi alabilirsiniz.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>
                  <ReceiptIcon className="w-6 h-6 text-[#002680]" />
                  Ödemeye ek olarak KDV uygulanacak mı?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Hayır. 4691 sayılı Teknoloji Geliştirme Bölgeleri Kanunu
                    kapsamında Sanayi ve Teknoloji Bakanlığı tarafından 102637
                    proje kodlu Kurumsal Yönetim Sistemi adlı projemiz, KDV'den
                    istisnadır.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
