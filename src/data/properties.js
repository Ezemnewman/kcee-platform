/**
 * Placeholder data shaped exactly like what GET /api/listings will
 * eventually return. When the backend exists, HomePage swaps this
 * import for a fetch call — the PropertyCard component doesn't change
 * at all, because it already only cares about this shape.
 */
export const FEATURED_PROPERTIES = [
  {
    id: "p1",
    title: "Modern 4-Bedroom Duplex",
    location: "Chevron, Lekki, Lagos",
    formattedPrice: "₦120,000,000",
    tag: { label: "Verified Agent", variant: "verified" },
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAbuxMuy67flT7RTgEhXPDovccsTfR5Lhqr8RqqT42XfYdzzfFQSBDSd9SMgS460BWF5-jd4BA2HSMgPE2lHIpzCgPf-Y03i0oo4L75dYESeFzB0_vbmYyLEWTfv7odX6czn32fsLkgtOmABNjMRDCm1iRQuj9LyrxIayyg6mOUWibZ7yMogi4zN81z1oiuUbegESSMEEjAWIPe90Kwsy1DMdJyYIOgJ7cFW-rwyjtO1O2RLXRyv0caNDfHN9UAr9FDY18M09EIEPWt",
    imageAlt: "Modern duplex in Lekki, Lagos",
    details: [
      { icon: "bed", label: "4 Beds" },
      { icon: "bathtub", label: "5 Baths" },
    ],
  },
  {
    id: "p2",
    title: "Maitama Luxury Mansion",
    location: "Maitama, Abuja",
    formattedPrice: "₦450,000,000",
    tag: { label: "Verified Agent", variant: "verified" },
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDh2EGDFNVSQPsV7EK9EkALGGJllvFatsGbOj702aUB7ymg-GQTYvbIyYnIZOer5CrgwZ2usGU8yKKWSUhIMBxKvUYyLR2L-5gOuDrTJiSmw5WSS1rLW7RdTZGydNB_xRIARq6N1hjc3lsw_9JSoUVk8dY8e1ztF1Lfu3KTgrX2LymrljeukgOa4iD1D_2b5a3NH6BNVIYwu6mfF7Bt2Tw8YeeGQqrtEJIvQrcZVbw-djdXAXvIKDK80jl8XGArp4J_CWD-clTwmtaF",
    imageAlt: "Luxury mansion with pool in Maitama, Abuja",
    details: [
      { icon: "bed", label: "6 Beds" },
      { icon: "bathtub", label: "7 Baths" },
    ],
  },
  {
    id: "p3",
    title: "Ocean View Shortlet",
    location: "Victoria Island, Lagos",
    formattedPrice: "₦150,000 / night",
    tag: { label: "Verified Agent", variant: "verified" },
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3jD7GKoREDNFEIIPYHu8qj-QDVhHZ87Tl9K7MgFcr1olmt5Kpp2dVwN2-gQo9Nv6hf4EIhWAD33dgn98xWpFHFnZzBuwmVaLCSZMDDv_E-Iaw-vWENvfWqnhRWZRGuadBtk1I9S0VI60uo2fAeF34MODb2M09KHMTOeKvfRWBYvbOcJhJBkSb8eMGlh3uSc_5d3d8fqMuY_D-Sk4sa016AfRARrUlD8lMz-jyK_sIFR9iVcjPay96ygU7YONh2FhRXL1WXnn_cj7Y",
    imageAlt: "Beachfront shortlet apartment in Victoria Island, Lagos",
    details: [
      { icon: "bed", label: "2 Beds" },
      { icon: "bathtub", label: "2 Baths" },
    ],
  },
  {
    id: "p4",
    title: "Prime Estate Land",
    location: "GRA Phase 2, Port Harcourt",
    formattedPrice: "₦45,000,000",
    tag: { label: "Verified Agent", variant: "verified" },
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC31T7bcaDfUfqsYPPVeeejm4S7o-ATJjfIGgadsICqFUYGTUuziOrpC7-uqC9QVKTlPTQTdQsSgIkzH8jwQAWT60mHq2cogE4km3A8LthMNFatmFAeTxqoZpnl6UvSjBSvyHVXKaoAKdSGlqH2DCrdrf-RZ5SMYCYiA69c2SbV-HpUlNvtO094Cr-ESrUdAUUIpHhzd22adTErj_KZh1ZPHqg3Ye3ao7NAwrAxJ3VHNSCGvghayacrAGm0NIuWatfTHmuXNH7LJI4c",
    imageAlt: "Secured estate land plot in Port Harcourt",
    details: [{ icon: "square_foot", label: "600 SQM" }],
  },
  {
    id: "p5",
    title: "Modern Commercial Office",
    location: "Marina, Lagos Island",
    formattedPrice: "₦12,500,000 / year",
    tag: { label: "Verified Agent", variant: "verified" },
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAherY8fw8ksUGM029Y2Z4Sb_9yKPhdp8tpKQ_7-6UQ5geM61gloS_Wcl4vS9JBMX84l_7rOgFYHEd7aKl92TLY2QNRK9w5UcVoTcH6zleFOjbKQHQgte0wyZpX5zUY3vfKT4v6fKqRT9RE1bNlcGI-p5Nf8A0Jzki1vkBkKfeI9hll338inaDGbMqer0Bh6ffs6xw1LtPu55w7_YLrVoOkVWN3X7byUklNluHw55r7yuhC_9jB8si7LymsATpB1g06DPClvLU2L87Y",
    imageAlt: "Commercial office space in Marina, Lagos Island",
    details: [{ icon: "square_foot", label: "120 SQM" }],
  },
  {
    id: "p6",
    title: "Spacious 5-Bedroom House",
    location: "Independence Layout, Enugu",
    formattedPrice: "₦85,000,000",
    tag: { label: "Verified Agent", variant: "verified" },
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDvDBpPQB7vGfo595x-rtiI40qGBTzQm4XdPbBSz0OKCRHuoL1sW7s54-ifSvzd9oGxp-0WXE4p3pTqtOVON1xdTq6Bbw94cmj6bH38jQQa-8stUz-HoEcexKIB0PNJfRwr02C3jxHjVkU2VXk0itdOGlwwdliE4avKbpqzpuygkERo-OF-3cu7jL8InoaPXBas98A_mJmxJfRidV_zP3xyy6kwq_WneDGxlNpkaYs6RyVAd8yzSUfYKNf3sjm-J5gC72DG9-WLyYfr",
    imageAlt: "Suburban family home in Independence Layout, Enugu",
    details: [
      { icon: "bed", label: "5 Beds" },
      { icon: "bathtub", label: "5 Baths" },
    ],
  },
];

export const CATEGORIES = [
  { icon: "apartment", label: "Apartments", href: "/category/apartments" },
  { icon: "villa", label: "Duplexes", href: "/category/duplexes" },
  { icon: "landscape", label: "Land", href: "/category/land" },
  { icon: "hotel", label: "Shortlets", href: "/category/shortlets" },
  { icon: "corporate_fare", label: "Office Spaces", href: "/category/offices" },
];

export const POPULAR_CITIES = [
  {
    name: "Lagos",
    href: "/city/lagos",
    imageAlt: "Lagos skyline at sunset",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBkNUmap_LxYcS2Dlh-Jz1k-nu8f8wVyft-8t7EpYgZjw2h5XjADEeLVaNn0B9_s4uIziw8rQhN2ErurVHeGmrDUAw7-QYwdkbWr4Im9pq4LY7AqjebDW7fcA1NZ3wI-CrIckAWLQLSUagCI6Oa2At0vlNyWYw4A-3CmjK1oyIeJGIGCqhLz6o-P-__cQ1TDyLmpH8-MLi-mozFkO8hfn8Jx3RALbb5W4ICSjqU-pxIl-Xd09DzZnc2XC-obLdg2s7bQ-1Hk66EZLWc",
  },
  {
    name: "Abuja",
    href: "/city/abuja",
    imageAlt: "Abuja city skyline",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC8JKvL8EHZSJG8n8MgdGH19B40N_JW8uw7XOclw_JuWu0u5Neq7FDXa1-2zEd0e2lgFcVBX0uh6p3HUdVYtAx_FNkO8TyNfEy695uzv71gfQC1-vFQFGwYCj8s-ZqNZmFQJNJAlJjrpNIVZcv0ns8bQzXM9PIFIvjYCY2z-5ZmnVXqMrUv33549PzNArYFvhwn97S9JCN5pXluFYKtsoohu4sestl11FRqD2SLWuAqcwUK3zLkv44M_rMiuk7z4w4jjHnCGbohri2t",
  },
  {
    name: "Port Harcourt",
    href: "/city/port-harcourt",
    imageAlt: "Port Harcourt aerial view",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAw0BpZNqWs_RGdWLNE31gb5pJ8DT5tQAXSbUB6CKgq0MFPI_9fupeI-j0f9fCqwSim_Fs02UGsUKrllWfYZyiD57__OUgOwDO_hpDRBFPEEPK6e-k8RXi7a85ckX93gUtSAb6fLe1OUm5T8gW6hFyR_pDybIRnoT93CKdkw9GU3mWptzHX2EVD2CR92_8r8Hnk0hpf2VU7ZATmkWwGUvBBj4v53mnJTf5j-OEVVbOnVqFV73YSATS5iH8PHmc-3lO2OKwoAEaJKVR_",
  },
  {
    name: "Ibadan",
    href: "/city/ibadan",
    imageAlt: "Ibadan cityscape",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCV_OXzgXy4vWgr_U4mIAhXTAo5xzaeruTgukbDcg9Sty28KBDyqk9OCT0zP6bRdINsyq5244a33CcYEjmV3EQnXIibasZwRuggLyJGbvIEcWVvzdP5DehBuKxLGDOxt4mHd1rQT8nnJ2sBx3lRoTLBc9vCohjYgt7wQ_0ARINmNOyRnsxOeAsQzV_cccUUeM7lwK3YRQY7xY3n8VPGftzrLkvAyZAofDUrv_Mx8hdkylzfn5lCsKVz-DzPaFriXFVbB9Bn4-H-KPIq",
  },
  {
    name: "Enugu",
    href: "/city/enugu",
    imageAlt: "Enugu landscape with hills",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCGIeIaNTauUpOubCLAi-vgJC0b8dl6bq3_RXU4MnrbfQAvwALN2Pr8HVPykjR5kjaOvMLi8B9m0HySpwVLjqbe9JsQavlgHIvjuq3biZWXNFKya2rK5_7hnxy2Y09SeFliRJhCscT9UXI7whKFpfCmYyU-EaCkJffAUQC26cDKa--lELkH7R2t1wPyOA8o3TnTkM2nXuXlj_nvqXyPMgKmE3RAuMaXUeyhgmWxxQfbtSTNgcvx7BFBsO6HdKgUeWUjGUK2mLiAk_zO",
  },
];

/**
 * Demo properties for the Search Results page. Same shape as
 * FEATURED_PROPERTIES, with two additions PropertyCard now supports:
 * `tag` (verified-agent OR shortlet-style label, or omitted entirely
 * for the land listing) and `agentAvatarUrl` for the small circular
 * agent photo shown on some cards.
 */
export const SEARCH_RESULTS_PROPERTIES = [
  {
    id: "s1",
    title: "Luxury 4 Bedroom Duplex",
    location: "Lekki Phase 1, Lagos",
    formattedPrice: "₦85,000,000",
    tag: { label: "Verified Agent", variant: "verified" },
    agentAvatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDkAyoaIQGhyohR3A9ri4LZSEwJR-i8q0xoRAW1MNfbHuEv6_3mfXgp-SJkXAN9EcN1psjhAfQuXmlNZnVLO4LJTlewAGWL707AxL1iiGuCsCNhF80J8h18eqI3RWZAHNtBwDOYuugQmMvTu4W5HD6eL-fFXgGMnm5kOBdG_zE2ZXJd3SvlTAmTieK9RMyOHP4TIcRqZ69tQUr0l12ezdRNHQxQirx3Jrw0lW9ZpJu-3DcHxl4qDKiA7WZ3qvXvn9WhSBC3uHI7muD6",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCNH9P9UQcYTPLw1_G-LvypRQybhMDPxyKJV3bLco1cAyPsNDTzJFBOdbSGipv5kHze-UfiCbhxjHvLvqQFREscfcxsoPR0Oubx9Yult5zOFrd8xRLebkI67Rl0y6EDv7FBnTXN8Y6lFGjHVsHn5N4rz7OjkVipo-sbh_FwcwKFtKbJjzQnOc1BRVuxgkbbI26vchEqhdCEjlXkhPcH1lKf1i7iRgSh-o3QzB4ZXYenRvHT5fJXfWyk3JzW50Gm4GRdsXGpGYObQ3aV",
    imageAlt: "Luxury 4-bedroom duplex in Lekki Phase 1, Lagos",
    details: [
      { icon: "bed", label: "4" },
      { icon: "bathtub", label: "4" },
      { icon: "square_foot", label: "350" },
    ],
  },
  {
    id: "s2",
    title: "Modern 3 Bedroom Flat",
    location: "Ikoyi, Lagos",
    formattedPrice: "₦120,000,000",
    tag: { label: "Verified Agent", variant: "verified" },
    agentAvatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAy94oWRnhekD0ENB2I1HuBbceoGrl5CZpV0ljpOJe5lGq2UotgqqdGFioY6l_vcVh8_fI_S8kGf5EmDSYcS-olBrL78q8zTpmWEGSAxlw0IKgkfWcQ47ktZKcnZ9bWKFgoKdzipnwW8pNyQNMSqhq2KQlciD06OuojLCWX4hQZ9MNJiGq-nS_SfbZv6fbdCn7363qdkTBYXmNO3xc8Bg_xpFJTsB9ZnJQ3zSHtBnyIaSBs-mY1hwj4y-9grXW5lQrOwVFh_WdWE-fX",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCVF1Ex1Aks04Kyvr2pesSd1qGAZORCNPaiSR62Vk6bxGcuPNNg6SrvBwy4A5RT-74xHd_amJBGBe1c9ZK_tMHrLhYvyrh7Q9byUZOBY0pzmAZgtegyrZsbpqKQSiE4Rpajce9bp05huLW7TyiXM_CvgyhARZcOTwU8o3us6yGOiPXHUxmlFOkhU2bF1HjFMfzuv1e-_IyUkfKVHRyXUJn07cuHCBxnBX5Bhl0duykHoWnfKz-4W6d523Us_dQEWplbAroOnc3izsQF",
    imageAlt: "Modern 3-bedroom flat in Ikoyi, Lagos",
    details: [
      { icon: "bed", label: "3" },
      { icon: "bathtub", label: "3" },
      { icon: "square_foot", label: "280" },
    ],
  },
  {
    id: "s3",
    title: "Detached 5 Bedroom Villa",
    location: "Ajah, Lagos",
    formattedPrice: "₦65,000,000",
    // No tag — this listing has neither verified badge nor shortlet label,
    // confirming PropertyCard correctly handles the "no tag" case
    agentAvatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAoUj7qEEfXZXkIVrCZAfmUTa-rIJeFgnNXLFmoxT_X6dPFki9S_-fXZPgn7ne-zxqTrH6bweRVuPSMOhq9Poopcnzohy1AjhrMI5ZxAVqPOolJbTSPaOf20B5TjvOEuMs0aOFFPnRwqmU2Z9vCeXqSc87xh2lbC8bB8YdpzdUUE69dJGM-tm4NkKQ7TuwngbTYl2xcm8qVcEvFcVDKRlPajS1-hVAHA7awkuASdGg0iM5PdKpASvxEarg4QKZ1raax7l-2Hr9Za6uH",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCBWD9O6ksrKXEQAuf7m3OeZ2rZktRHTgStZFolDpKpDnEPgo5AHRjfwMGOgQj7PCpVTbSLaADyC1xq6ME6K3Kf-eXAfe2eYw9tQy63B0gyPTdzdNMLrTAR4XxHfzQ8eQVyk2Phg_2EfTFTxXGBy71AAIE6zb6AnSdBQ7aFWICUG8AmVbQXCoAr15H1WJZMCONpGyWWGioOi02AzQ4oIw2Mv9EgftsjsgUYVSf2gUUo4Sa3IxikSN5mC65yP9Kww3BuqqHs15B7KKZV",
    imageAlt: "Detached 5-bedroom villa in Ajah, Lagos",
    details: [
      { icon: "bed", label: "5" },
      { icon: "bathtub", label: "5" },
      { icon: "square_foot", label: "500" },
    ],
  },
  {
    id: "s4",
    title: "Premium 2 Bedroom Flat",
    location: "Surulere, Lagos",
    formattedPrice: "₦45,000,000",
    tag: { label: "Verified Agent", variant: "verified" },
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA_5MpiOow5JuBX1RsNs0q0dFUmAug_ycYBVyT8I5gtOj0Sri_HMWTGS3V-H1y8LdM291Jl99mxXiiSAXQHi_DD0lVMWjOgKWrDoJEXPK0WGHF2xrwccoL-Jk2x1g4Ed3_zBDY7IkUbosYKwtwqWGdeylbsZIYqZJGZeAhQQLqI-1pJNtuEztzpxXVIAhVShWBn_BfFLTq6xhXSiAGNZQrfDqYxAEApqsj-_TdVTdEh4BSpG5fwDsjixsaPvkev5EFVl8uq1_ofgU6k",
    imageAlt: "Premium 2-bedroom flat in Surulere, Lagos",
    details: [
      { icon: "bed", label: "2" },
      { icon: "bathtub", label: "2" },
      { icon: "square_foot", label: "180" },
    ],
  },
  {
    id: "s5",
    title: "Investment Plot (600sqm)",
    location: "Ibeju-Lekki, Lagos",
    formattedPrice: "₦15,500,000",
    // Land listing — no tag, no bed/bath, just land + sqm stats
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCsvx218V3TyEExGfFif-Z9kQS-htAg5QWGJQZ1yheuEIriVHZK54sKaAPoKFVEprmdtgU4VhrIwa5ac99ryOvhmAx9ZRQiMAqlqNgMn4kMLyaOlKrA6_HRHigVVDydazgK_myYcSxsgc6s-rjWpNK760t_9AX6EhZu1DgJWf83m8TnT0pCkUwqHpqpbTPIjNMTMF3-VXNJBy2da7NdipT9pHXvvK-0YfGaeElZq3CLcUUnKBl65hPuZb0jsFzbz38XwKABh9RHgoQ1",
    imageAlt: "Investment land plot in Ibeju-Lekki, Lagos",
    details: [
      { icon: "landscape", label: "Land" },
      { icon: "square_foot", label: "600" },
    ],
  },
  {
    id: "s6",
    title: "Ocean View Penthouse",
    location: "Eko Atlantic, Lagos",
    formattedPrice: "₦150,000 /night",
    tag: { label: "Shortlet", variant: "info" },
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAqLVL0V8n4aksIlWNtpqW3qJsgn4RhkJuZAZBgul7OoDB4fBxT8CFFL8br-2EI-FAgY7sIDHASNW7BQ1wBzIMLYYQmf5TqJqFZ_QGZGTrwROPXDykf0wZ2EFr1eCswUQ1nMA_6Xh1Q2y7JpxkRCFZP3JhwRErz0TVWZqMiA9Pu4xqSSVnvz7gsjRN7q6Qg2xz5j2VQZU0jwt255rrONMoWLk-jJCGHrKjjAn_Yz6ak_Z7daIpxlg5TKjjQxy0DJ9wq3DbYmKh9et_w",
    imageAlt: "Ocean view penthouse shortlet in Eko Atlantic, Lagos",
    details: [
      { icon: "bed", label: "3" },
      { icon: "bathtub", label: "3" },
      { icon: "pool", label: "Yes" },
    ],
  },
];

/**
 * Demo logged-in user, used to show the navbar's avatar-or-icon
 * fallback in action. Once auth exists, this comes from a real
 * session instead of being hardcoded.
 */
export const DEMO_USER = {
  name: "Demo Agent",
  avatarUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuABRQ79LEG5LCv2mFLeM57XqAXyJRzw_de4W4FdA6S8N0vtumYXjUu5NAIIDoO3uwf2WROumhqwCJJOTLARrppiExCxplTNeRWB2gjQl98lyJpb1ODidx0ZGEpoYo7FOYOJOEXriArl1y3HHuH8qkKp2Fw4ii18zNQ2F3ovrr1zABCtPfXcig1x6BE4CR-THwuxlRNdHN2RSJqQsfKMO8rUScQTLk82x3co_NHdcejMDGnJTaTotjHJifWvjBchNe6JMUEu3buVdKTX",
};

/**
 * Demo data for the Property Detail page. Shaped to match what
 * GET /api/listings/:id will eventually return — one full property
 * object instead of an array, since this page shows exactly one listing.
 */
export const DEMO_LISTING_DETAIL = {
  id: "s1",
  title: "Luxury 4 Bedroom Duplex",
  location: "Chevron, Lekki, Lagos",
  formattedPrice: "₦120,000,000",
  listingTypeLabel: "For Sale",
  description: [
    "This architectural masterpiece in the heart of Chevron, Lekki Phase 1, offers an unparalleled living experience. Designed for those who appreciate the finer things in life, this 4-bedroom duplex combines corporate modern aesthetics with the warmth of a luxury home.",
    "Featuring double-volume ceilings in the living area, floor-to-ceiling windows that invite natural light, and a state-of-the-art kitchen that would delight any chef. Every detail, from the premium marble flooring to the smart lighting systems, has been curated to ensure comfort and security.",
  ],
  stats: [
    { icon: "bed", value: 4, label: "Beds" },
    { icon: "bathtub", value: 4, label: "Baths" },
    { icon: "square_foot", value: 350, label: "SQM" },
  ],
  photos: [
    {
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcZAyjuf5ispw1jPc86Zflu9VjJ7zrbSGJIq91JZ5Y-ZI6geFiw-ghUEFgzrkrsE1lXYvR3nSwJFtld50vgLvQH4WY5oNTPLPDAtKgSLyfRyOe-XKlDFRfRlydAh3qesSE2JqKq-EYzrHYcab8zPIEFMgnnmcUHlI4c0Loe_i1pr4Yf0958W3cMFThK6pigks_4Kvsz-G5MmODMaCl4ypFCuwCN00HZqBvFb1hnDREv36VMOIMkmH9ODBvyfFpLsF3ZgUpKFnkD4KH",
      alt: "Main living room view, luxury duplex in Chevron Lekki",
    },
    {
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCs3iKoa3xzUW7rNLwZGsUdMKhI8zUtWT4kaBddo7LwXOuJIKCBx6diofIwRux-MN1_hfuJYeT7MX3P1XyAGXBspOk6-a7JJDL24HiwKUqrANI7ssGqlj2NlNqp3c1BCrB6ZLN3BrYdDP_fscAjDAsAzNMcsRztGeyFqY38N4pGusnh0EZnnPikOr9-1v4w2cE9M1qI8B3uf5iPn61zoAG6Yl6GbOhgCG-G3sbD0cozWKCG54FGc-7HQaq6i7zOUMRYFdD_W-x2vFs4",
      alt: "Modern kitchen with city view, luxury duplex in Chevron Lekki",
    },
    {
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqrIe2zcP1zhs1828YiG1jmSzNrs8EPPh11D2Eg0Xo-NuyeGPovbf6HJnxshorR7I5C9uikvgaVzmNA_mvU62Pg7kYD02rVI1Bg_Zo6vyBcwyllulic3dvTST5VY1FQdLtrb5YVBlsjwD4NQTKVAql1NMWusuB38J2muy1X1eyEWp3fDz3Rd4TeeR0rd_h8xT4xImealGwijDF7wEAqm7ABy-M7El9wY1gD5eoBtCsCuiDtzTX8SsjwJoVYvfkzFpu6uYtaMHOu8IE",
      alt: "Bedroom interior, luxury duplex in Chevron Lekki",
    },
  ],
  totalPhotoCount: 15,
  videoUrl: "https://example.com/property-video.mp4", // placeholder, no real video file yet
  amenities: [
    { icon: "water_drop", label: "Water Supply" },
    { icon: "bolt", label: "24/7 Electricity" },
    { icon: "security", label: "Security" },
    { icon: "local_parking", label: "Parking" },
    { icon: "chair", label: "Furnished" },
    { icon: "ac_unit", label: "AC" },
  ],
  showPricingBreakdown: true,
  pricing: {
    basePrice: 120000000,
    fees: [
      { label: "Agency Fee (5%)", amount: 6000000 },
      { label: "Legal Fee (5%)", amount: 6000000 },
    ],
  },
  mapImageUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAK7A0kQMmtGy_LNwP6K3XEAyRFvQtYwfmb8CcOzvbrObffAw3iYSvOQhqwggeTfQIIBsRn8tliAWav1puOKMCExx74A5Hd1EtEMo6Ni8dSnGM_xotBT6-4Ap2oZw8KonWVDT9aF1njCGVS4IpL0Cfh4e2CsCqAkhSyJBg_8GtKDaLg_DidkY0DsAT_SOkwh_xaYa0DGJVczuiafKptEURSGKCL2xFMdJXZpSmFp1q1rhpUihmetSAh-2SDYVgGMPl0rANsy20j_mNM",
  mapImageAlt: "Map showing property location in Chevron, Lekki, Lagos",
  nearbyPlaceGroups: [
    {
      title: "Nearby Schools",
      icon: "school",
      places: ["British International School", "American International School"],
    },
    {
      title: "Medical Facilities",
      icon: "medical_services",
      places: ["Evercare Hospital", "Lagoon Hospital"],
    },
  ],
  agent: {
    id: "tunde-bakare",
    name: "Tunde Bakare",
    verified: true,
    phone: "+234 801 234 5678",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDIVyHevIyT7rlD7_jROOAHNFYqAFmrZ8LoVhQ3rcVlpU-P6l3hKVqYyfUly9GetaUbsS2Ihm51YY4LNLc0xKRhnmNvDd9Nrak5GE3PMDfTn_WSarSRXa_pa7imrydcSdXF9MksMhc8ceUJt3OoJFanWE3ss303Lp7ZCEiOhk-6lGYW3_sJvjRMJhk4e615ikB5uP34BlS7EW4tb9XMKl3nnPuFeQ2ZEJLOaUPTUkH4StDQ7dMUk3NUwezavUzMAQEfKTnd4EbsiNoa",
  },
};

/**
 * "Similar Listings" teaser data for the property detail page —
 * note the shape is intentionally simpler than the main listing
 * objects above (no tag, no pricing breakdown), matching SimilarListingCard.
 */
export const SIMILAR_LISTINGS = [
  {
    id: "sim1",
    title: "Modern 3 Bedroom Penthouse",
    location: "Oniru, Victoria Island",
    formattedPrice: "₦95,000,000",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCnLzBsYQKspbBz3s6sNGZ71pGUqD6Eh4swSIvH-1lOQhFfZy-9LO4AouDCHdfB4ezPWEYVDiuvugyPC1oG6xkfJVIg363TeEf4Ppj5Wr46IIqsqvyMOo8k4-7Txw08IWoWiI3idRhvlonwnHW7a2ZY9ai5oZA7T6wzuBQpTyTguWYnE_xC5hWUqLuiao3MGhpAXBCboZbVlRkdYmBnDJz5PBKYzyNo28amgnacGVRPMhNltKaE2pbgSyanmXJSquo1qDyWgmOqDAur",
    imageAlt: "Modern 3-bedroom penthouse in Oniru, Victoria Island",
    details: [
      { icon: "bed", label: "3" },
      { icon: "bathtub", label: "3" },
      { icon: "square_foot", label: "220m²" },
    ],
  },
  {
    id: "sim2",
    title: "Luxury 5 Bedroom Villa",
    location: "Banana Island, Ikoyi",
    formattedPrice: "₦150,000,000",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYFrotDGS3zljo4TuNbAcgmMePh6FCEVC2N2tWLYjzI_TRbGdMvzbrAxuG1ORE7v4u_XozCErW_wzuRHlwj6AX6khSUa9u3H7NlYDspCj4w-qKPDf3nMf-7mSmEJehVP0NoO2wWTouOOD9fFYX2rYvM2mNchmsWC_rn8S90s7p6FQXftFTWoh5S7A_HqUksJwEkBqzsgbh0VOLwZCFLBOlmO0QaKChhPVlmck0JB2Lh1H8nhujSy_X0Ga48HyjaykZdybspexiBWVb",
    imageAlt: "Luxury 5-bedroom villa in Banana Island, Ikoyi",
    details: [
      { icon: "bed", label: "5" },
      { icon: "bathtub", label: "5" },
      { icon: "square_foot", label: "450m²" },
    ],
  },
  {
    id: "sim3",
    title: "Executive 4 Bedroom Duplex",
    location: "Orchid, Lekki",
    formattedPrice: "₦110,000,000",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCSLYJ6fO9sbXleNiWMS3eTMMu78oKY3sKIWaqZvv-Cd9N_mXQC3VUFnH0_lfqi5n51ipcA3rMnM8jXNr-vgHmC1ICa0M13EAQ710MSJYGwZMJ02q5GJ2NQY27TMTz2ghN1TzjtempflgiGlM9k3iDjOkZhtStFi3t3z3E_uOpWHtkmudjf1GHXKqjB-XUILej1r832DeKRM6lXNUmdbYFXsq4YXLhi3tfOHEwC-hQ8cHf3aHkuhQ3fJ6Us7ZzOBMUGMx38RjFeA3cd",
    imageAlt: "Executive 4-bedroom duplex in Orchid, Lekki",
    details: [
      { icon: "bed", label: "4" },
      { icon: "bathtub", label: "4" },
      { icon: "square_foot", label: "300m²" },
    ],
  },
];

/**
 * Demo data for the Agent Profile page. `AGENT_PROFILE` is the agent's
 * own bio/stats; `AGENT_LISTINGS` are properties they've listed, each
 * tagged with `listingType` so ListingTabFilter's "For Sale / For Rent
 * / Shortlet / Land" tabs can actually filter this array instead of
 * just toggling button styles.
 *
 * Reuses PropertyCard's `tag` (verified badge) and the newly added
 * `typeBadge` (e.g. "For Sale") since this export stacks both badges
 * on the same card — see PropertyCard.jsx for why those are two
 * separate optional fields rather than one.
 */
export const AGENT_PROFILE = {
  id: "tunde-bakare",
  name: "Tunde Bakare",
  agencyName: "Prime Lagos Realty",
  verified: true,
  yearsActive: 5,
  phone: "+234 801 234 5678",
  memberSince: "June 2019",
  photoUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAYzObswFO-lo7B4dPCztSAUgLOYkE8u0537uwijrknLH5tf2zSgq6kCdV2l_WDBobjMYwsHTzQQmkhsV3l_cMZvFbDxCsKsY0A8yVwqZOAyVz4wWK_dwQ-o6AxHC-tno3BCfsCHxeiKn1v-X7GCiHmWKfHs36Wezo-InPoQ60dQUqbiXlflSrAlTQUBUuXKDAAoLFxs_5nJ4EoiC6076IyIj_bX5U6WQ-BuOywoWeuM0Km7vc-Xx4yxESyvfQBIdFZiXVZsTAUFz4G",
  stats: [
    { icon: "real_estate_agent", label: "Total Active Listings", value: 24 },
    { icon: "handshake", label: "Properties Sold/Rented", value: 112 },
    { icon: "event_available", label: "Member Since", value: "June 2019" },
  ],
};

export const AGENT_LISTINGS = [
  {
    id: "al1",
    listingType: "For Sale",
    typeBadge: "For Sale",
    tag: { label: "Verified", variant: "verified" },
    title: "Modern 5-Bedroom Detached Duplex",
    location: "Ikoyi, Lagos",
    formattedPrice: "₦ 450,000,000",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCBIdbm8Qgjx40sO0ioOHqqKewCoYOySNdLvbsSOU5kyMGufO3oV4cT4UoQwNe7aqbu_KwsVTXIRtDFMQKEZEdWGxrHzdXbIg5xPbinDbVcBEfH-n0X7JZwbHvhMJq9u5c1zJmNEYdDDl1kR_6FQ0ihuN81bFrmx9dNpj3FHByB3-S1W5m6UgVYqzAc-BzJs8WnEbq8ean-otErp3lRylkWbED40UdqyvhlsBx2Li4j4JhB1E--V-BEWP9_XiGoh5Rmjbjll2etXvDe",
    imageAlt: "Modern 5-bedroom detached duplex in Ikoyi, Lagos",
    details: [
      { icon: "bed", label: "5" },
      { icon: "bathtub", label: "6" },
      { icon: "square_foot", label: "450 sqm" },
    ],
  },
  {
    id: "al2",
    listingType: "For Sale",
    typeBadge: "For Sale",
    tag: { label: "Verified", variant: "verified" },
    title: "Waterfront Penthouse Apartment",
    location: "Victoria Island, Lagos",
    formattedPrice: "₦ 280,000,000",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDhh25m4KhaKUB4O0Z4xBtrhuiKJdWyRMXJiwBlcQHsGPXvySxXa6JAGE5TyFKpuQPDNb6quXDI0EA9p_JoQpMy9DRj2YvRTtXFjGM5VKRgmBRwRN206F3kAFcpAiqNKeo2OvQNlOBJUHsH3Y2JeDCUcheSJ4AjuTfU8Q47KEVbiABNn7QNDmX6qyWMCzGgyKJ0PocNXL49F_uemgAajDhrl2KwRL4sjJ_anaKrvxgO9h5ERjbF1CAvXxYaEpfLGcM_E2M3TUMd_PCt",
    imageAlt: "Waterfront penthouse apartment in Victoria Island, Lagos",
    details: [
      { icon: "bed", label: "3" },
      { icon: "bathtub", label: "3.5" },
      { icon: "square_foot", label: "310 sqm" },
    ],
  },
  {
    id: "al3",
    listingType: "For Sale",
    typeBadge: "For Sale",
    tag: { label: "Verified", variant: "verified" },
    title: "4-Bedroom Terraced Duplex",
    location: "Lekki Phase 1, Lagos",
    formattedPrice: "₦ 120,000,000",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCosOPNQk9V8yg93_CZNIvxtzvuzFbxioN9oBz5JlMryxf1gMIW1O0vNro-cQ2xBKuMEEKGPJ90x7UeF8Fgy300G8fH0JdQNtnzHWi9CSuwJCHNnyWJ6Rg2iwQow9xG8xeZak3DQDcJft9w8stpH01maVmhnhF3hB7naN2tCbsq0jEFeu2Fcx858QHUuQivWHYtatemhUKkpzZWXpi3NKfFX1ANssjAeOmMITRrSl6HBQAhlmtrkEAlM1bJLtYyToICk70GaRwMMboS",
    imageAlt: "4-bedroom terraced duplex in Lekki Phase 1, Lagos",
    details: [
      { icon: "bed", label: "4" },
      { icon: "bathtub", label: "4.5" },
      { icon: "square_foot", label: "280 sqm" },
    ],
  },
  // Additional demo entries below give the For Rent/Shortlet/Land tabs
  // something real to show — the Stitch export only designed the "For
  // Sale" tab's content, so these extend the same agent's catalogue
  // for the tabs that were left empty.
  {
    id: "al4",
    listingType: "For Rent",
    typeBadge: "For Rent",
    tag: { label: "Verified", variant: "verified" },
    title: "3-Bedroom Serviced Apartment",
    location: "Ikoyi, Lagos",
    formattedPrice: "₦ 8,500,000 / year",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCVF1Ex1Aks04Kyvr2pesSd1qGAZORCNPaiSR62Vk6bxGcuPNNg6SrvBwy4A5RT-74xHd_amJBGBe1c9ZK_tMHrLhYvyrh7Q9byUZOBY0pzmAZgtegyrZsbpqKQSiE4Rpajce9bp05huLW7TyiXM_CvgyhARZcOTwU8o3us6yGOiPXHUxmlFOkhU2bF1HjFMfzuv1e-_IyUkfKVHRyXUJn07cuHCBxnBX5Bhl0duykHoWnfKz-4W6d523Us_dQEWplbAroOnc3izsQF",
    imageAlt: "3-bedroom serviced apartment for rent in Ikoyi, Lagos",
    details: [
      { icon: "bed", label: "3" },
      { icon: "bathtub", label: "3" },
    ],
  },
  {
    id: "al5",
    listingType: "Shortlet",
    typeBadge: "Shortlet",
    title: "Cozy 2-Bedroom Shortlet",
    location: "Eko Atlantic, Lagos",
    formattedPrice: "₦ 95,000 / night",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAqLVL0V8n4aksIlWNtpqW3qJsgn4RhkJuZAZBgul7OoDB4fBxT8CFFL8br-2EI-FAgY7sIDHASNW7BQ1wBzIMLYYQmf5TqJqFZ_QGZGTrwROPXDykf0wZ2EFr1eCswUQ1nMA_6Xh1Q2y7JpxkRCFZP3JhwRErz0TVWZqMiA9Pu4xqSSVnvz7gsjRN7q6Qg2xz5j2VQZU0jwt255rrONMoWLk-jJCGHrKjjAn_Yz6ak_Z7daIpxlg5TKjjQxy0DJ9wq3DbYmKh9et_w",
    imageAlt: "Cozy 2-bedroom shortlet in Eko Atlantic, Lagos",
    details: [
      { icon: "bed", label: "2" },
      { icon: "bathtub", label: "2" },
    ],
  },
  {
    id: "al6",
    listingType: "Land",
    typeBadge: "Land",
    tag: { label: "Verified", variant: "verified" },
    title: "Prime Residential Plot",
    location: "Ibeju-Lekki, Lagos",
    formattedPrice: "₦ 22,000,000",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCsvx218V3TyEExGfFif-Z9kQS-htAg5QWGJQZ1yheuEIriVHZK54sKaAPoKFVEprmdtgU4VhrIwa5ac99ryOvhmAx9ZRQiMAqlqNgMn4kMLyaOlKrA6_HRHigVVDydazgK_myYcSxsgc6s-rjWpNK760t_9AX6EhZu1DgJWf83m8TnT0pCkUwqHpqpbTPIjNMTMF3-VXNJBy2da7NdipT9pHXvvK-0YfGaeElZq3CLcUUnKBl65hPuZb0jsFzbz38XwKABh9RHgoQ1",
    imageAlt: "Prime residential land plot in Ibeju-Lekki, Lagos",
    details: [{ icon: "square_foot", label: "650 sqm" }],
  },
];
