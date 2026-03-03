export type Preference = "essencial" | "muito" | "ok";

export type Gift = {
  name: string;
  slug: string;
  image: string;
  description: string;
  buyUrl: string;
  price: number;
  preference: Preference;
};

export const gifts: Gift[] = [
  {
    name: "Camiseta John Mayer",
    slug: "camiseta-john-mayer",
    image: "/images/camisetajm.png",
    description: "Camiseta álbum continuum J.M.",
    buyUrl: "https://www.mooncamisetas.com/product-page/camiseta-john-mayer-continuum",
    price: 79.9,
    preference: "muito",
  },
  {
    name: "Box Charizard",
    slug: "box-charizard",
    image: "/images/boxpokemon.png",
    description: "Box de pokemon TCG com carta promocional e 10 boosters.",
    buyUrl: "https://www.ligapokemon.com.br/?view=prod/view&pcode=134845&prod=(PT-BR)%20Box%20Cole%C3%A7%C3%A3o%20-%20Mega%20Charizard%20X%20ex",
    price: 135.0,
    preference: "muito",
  },
  {
    name: "Serum para Olheira",
    slug: "serum-para-olheira",
    image: "/images/serum.png",
    description: "Eu ando parecendo um guaxinin, então isso vai me ajudar.",
    buyUrl: "https://www.principiaskin.com/serum-mix-02-cafeina-acido-tranexamico-acido-ferulico.html?gad_source=1&gad_campaignid=22190892659&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3DMD5hFeCDDgVjaAtEggYuYNQkiBQh8QIOI9kod-skcwkvweuoTD_EaAtb2EALw_wcB",
    price: 69.9,
    preference: "ok",
  },
  {
    name: "Cubo Magico 3x3",
    slug: "cubo-magico-3x3",
    image: "/images/cubo.png",
    description: "Cubo magnetico profissional",
    buyUrl: "https://www.oncube.com.br/cubo-magico-3x3x3-moyu-weilong-wrm-v10-magnetico",
    price: 94.9,
    preference: "muito",
  },
  {
    name: "Camiseta Toji",
    slug: "camiseta-toji",
    image: "/images/camisetatoji.png",
    description: "Camiseta do Fucking TOJI",
    buyUrl: "https://purplecomics.com.br/produtos/oversized-toji-curse-scrto/",
    price: 99.9,
    preference: "muito",
  },
  {
    name: "Pulseira Dourada",
    slug: "pulseira-dourada",
    image: "/images/pulseira.png",
    description: "Quero uma dessa pois estou começando a gostar de dourado.",
    buyUrl: "https://www.nordmannco.com.br/produtos/pulseira-essential-infinity-dourada/",
    price: 59.9,
    preference: "ok",
  },
    {
    name: "Mini Liquidificador",
    slug: "mini-liquidificador",
    image: "/images/liquidificador.png",
    description: "Um mini liquidificador para mim poder fazer meus shakes de maromba",
    buyUrl: "https://www.amazon.com.br/dp/B0DGQR3SJK?ref=cm_sw_r_cso_wa_apin_dp_03TW4BE1GJR21MS3RHE9&ref_=cm_sw_r_cso_wa_apin_dp_03TW4BE1GJR21MS3RHE9&social_share=cm_sw_r_cso_wa_apin_dp_03TW4BE1GJR21MS3RHE9",
    price: 253.9,
    preference: "muito",
  },
  {
    name: "Luz para o PC",
    slug: "luz-para-o-pc",
    image: "/images/luzpc.png",
    description: "Sou cego e preciso dessa luz para desenhar e enxergar melhor.",
    buyUrl: "https://shopee.com.br/product/1125085057/41654250095?d_id=21d28&uls_trackid=552dueje00r0&utm_content=UJdsPKQxgkwQV7JDXJ5BHwXpUQ7",
    price: 69.99,
    preference: "ok",
  },
    {
    name: "Monitor Portatil",
    slug: "monitor-portatil",
    image: "/images/monitorportatil.png",
    description: "Preciso de um monitor portátil para trabalhar melhor e desenhar melhor.",
    buyUrl: "https://shopee.com.br/Monitor-Port%C3%A1til-ARZOPA-14-A1S-FHD-1080P-Tela-Externa-Com-Alto-Falantes-Duplos-Segunda-Para-Laptop-PC-Telefone-Xbox-i.1479426456.27582644505?extraParams=%7B%22display_model_id%22%3A243121476223%2C%22model_selection_logic%22%3A3%7D&sp_atk=e79aadca-7d1e-4569-a5a8-25ec4f8af61a&xptdk=e79aadca-7d1e-4569-a5a8-25ec4f8af61a",
    price: 508.99,
    preference: "ok",
  },
    {
    name: "Teclado Mecânico Sem Fio",
    slug: "teclado-mecanico-sem-fio",
    image: "/images/teclado.png",
    description: "Um teclado mecânico sem fio para me ajudar a digitar melhor.",
    buyUrl: "https://shopee.com.br/FREEWOLF-M75-Teclado-Para-Jogos-Sem-Fio-RGB-Retroiluminado-Recarreg%C3%A1vel-2000mAh-Bateria-Membrana-Display-Inteligente-E-B-i.1431704062.54005190854?extraParams=%7B%22display_model_id%22%3A350475813675%2C%22model_selection_logic%22%3A3%7D&sp_atk=f532bc29-cd3d-4052-a6b4-ef88e0c11c7a&xptdk=f532bc29-cd3d-4052-a6b4-ef88e0c11c7a",
    price: 199.99,
    preference: "ok",
  },
];