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
    verifiedAgent: true,
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
    verifiedAgent: true,
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
    verifiedAgent: true,
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
    verifiedAgent: true,
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
    verifiedAgent: true,
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
    verifiedAgent: true,
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
