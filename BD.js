const productos = [
    {
        nombre: "Acetaminofén American Generics 500Mg Blister X 10 Tabletas",
        precio: 2300,
        categoria: ["salud"],
        stock: 200,
        imagen: "https://www.disfarma.com.co/fotosproductos/macro_producto_3.jpg"
    },
    {
        nombre: "Loratadina 10Mg Caja X 10 Tabletas",
        precio: 3700,
        categoria: ["salud"],
        stock: 600,
        imagen: "https://www.farmalisto.com.co/97135-large_default/loratadina-10mg-la-sante-caja-con-10-tabletas-rx.jpg"
    }, 
    {
        nombre: "Cetirizina Tabletas 10 Mg Caja X 10",
        precio: 6800,
        categoria: ["salud"],
        stock: 169,
        imagen: "https://www.farmalisto.com.co/117369-large_default/cetirizina-10mg-la-sante-caja-con-10-tabletas-rx.jpg"
    },
    {
        nombre: "Advil Children 100Mg/5Ml Suspensión Oral Frasco X 60 Ml",
        precio: 20500,
        categoria: ["salud"],
        stock: 25,
        imagen: "https://acortar.link/DrfCy5"
    },
    {
        nombre: "Ibuprofeno tabletas recubiertas 800Mg Blister X 10 Tabletas",
        precio: 3800,
        categoria: ["salud"],
        stock: 25,
        imagen: "https://www.farmalisto.com.co/154209-large_default/ibuprofeno-800-mg-caja-con-50-tabletas-recubiertas-rx.jpg"
    },
    {
        nombre: "Enterogermina Plus 4000Millones Caja X 5 Frascos X 5mL Suspensión",
        precio: 77300,
        categoria: ["salud"],
        stock: 25,
        imagen: "https://www.farmalisto.com.co/147144-large_default/enterogermina-plus-4000-millones-suspension-oral-5-ml-caja-con-5-viales.jpg"
    },
    {
        nombre: "Ciruelax Minitabs Tabletas Recubiertas 75Mg Caja X 40",
        precio: 15700,
        categoria: ["salud"],
        stock: 39,
        imagen: "https://acortar.link/EvXs2y"
    },
    {
        nombre: "Allegra Pediátrico 30Mg/5mL Suspensión Oral Frasco X 150 mL",
        precio: 69000,
        categoria: ["salud"],
        stock: 45,
        imagen: "https://beta1.cruzverde.com.co/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dw8036e26f/images/large/121486_1_ALLEGRA_PED_30MG_5ML_0_6_SUSP_ORAL_FCO_X_150ML.jpg"
    },
    {
        nombre: "Dolex Rapida Acción 500Mg Tableta Recubierta Frasco X 24",
        precio: 25600,
        categoria: ["salud"],
        stock: 17,
        imagen: "https://beta1.cruzverde.com.co/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dwaa5db52f/images/large/129822_1DOLEX_RAPIDA_ACCION_500MG_TAB_REC__FCO_X_24.jpg"
    },
    {
        nombre: "Minoxidil Forte Spray 5% Loción Capilar Frasco X 100Ml",
        precio: 54400,
        categoria: ["salud"],
        stock: 50,
        imagen: "https://beta1.cruzverde.com.co/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dw5ec23a17/images/large/398178_1_MINOXIDIL_FORTE_SPRAY_5_LOC_CAPIL_FCO_X_100ML_COLMED.jpg"
    },
    {
        nombre: "Clotrimazol 2% Crema Vaginal Colmed Tubo X 20 Gr",
        precio: 19900,
        categoria: ["salud"],
        stock: 55,
        imagen: "https://beta1.cruzverde.com.co/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dw72f38a3c/images/large/158213_1_Clotrimazol_2_Crema_Vaginal.jpg"
    },
    {
        nombre: "Metronidazol Colmed 500Mg Caja X 10 Ovulos",
        precio: 12200,
        categoria: ["salud"],
        stock: 18,
        imagen: "https://beta1.cruzverde.com.co/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dw1e90a055/images/large/97759_1METRONIDAZOL_500MG_OVUL_CAJ_X10_COLMED.jpg"
    },
    {
        nombre: "Esomeprazol 40Mg Tableta Lib Ret Caja X 30 Colmed",
        precio: 64500,
        categoria: ["salud"],
        stock: 31,
        imagen: "https://beta1.cruzverde.com.co/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dwed6769b6/images/large/97786_1ESOMEPRAZOL_40MG_TAB_LIB_RET__CAJ_X_30_COLMED.jpg"
    },
    {
        nombre: "Abrilar Jarabe Frasco X 100 mL",
        precio: 32000,
        categoria: ["salud"],
        stock: 54,
        imagen: "https://beta1.cruzverde.com.co/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dw28e71d3a/images/large/21504.jpg"
    },
    {
        nombre: "Congestex Caja X 10 Cápsulas",
        precio: 12900,
        categoria: ["salud"],
        stock: 46,
        imagen: "https://beta1.cruzverde.com.co/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dwa49f6f68/images/large/131836_1_CONGESTEX_5_20_200_MG_CAP_CAJ_X_10.jpg"
    },
    {
        nombre: "Dolex Niños 2+ Jarabe 3.2% Frasco X 90 mL",
        precio: 15800,
        categoria: ["salud"],
        stock: 64,
        imagen: "https://beta1.cruzverde.com.co/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dwdfbed9d3/images/large/21699_1DOLEX_160MG_5ML(3.2_)_JBE__FCO_X_90ML.jpg"
    },
    {
        nombre: "Dolofen Gripa (500+2+5)Mg Cápsulas Blandas Caja X 10",
        precio: 10950,
        categoria: ["salud"],
        stock: 31,
        imagen: "https://beta1.cruzverde.com.co/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dw1dfecdc1/images/large/527987_1_DOLOFEN_GRIPA_500_2_5_MG_CAP_BLAND_CAJ_X_10_PROCAPS.jpg"
    },
    {
        nombre: "Milpax Suspensión Oral Frasco X 360mL Cereza",
        precio: 69900,
        categoria: ["salud"],
        stock: 77,
        imagen: "https://beta1.cruzverde.com.co/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dw0c6380ef/images/large/42691-1-MILPAX-2.5GR+2.67GR-100ML-SUSP-ORAL-FCO-X-360ML-CEREZA.jpg"
    },
    {
        nombre: "Acifree Doble Acción Suspensión Oral Menta (325+500+213)Mg/10mL Frasco X 360mL",
        precio: 59400,
        categoria: ["salud"],
        stock: 99,
        imagen: "https://beta1.cruzverde.com.co/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dwdc5bd806/images/large/167901-1-ACIFREE-DOBLE-ACCION-325-500-213-MG-10ML-3-25-5-2-SUSP-ORAL-FCO-X-360ML-MENTA.jpg"
    },
    {
        nombre: "Geniol Gripa Cápsulas Caja X 10",
        precio: 10300,
        categoria: ["salud"],
        stock: 14,
        imagen: "https://beta1.cruzverde.com.co/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dw91b728a8/images/large/167902-1-GENIOL-GRIPA-(500+30+5+10)MG-CAP-CAJ-X-10.jpg"
    },
    {
        nombre: "Compota Máh Melocotón Fresa Manzana X 90 Gr",
        precio: 4400,
        categoria: ["niños"],
        stock: 550,
        imagen: "https://lh3.googleusercontent.com/5NHtf4zDC0c8HkXyYpQ-hn0zJPu27-_maIqdg-RycltBsbzeht4nIyUHTXeASqsnctU8zC4XGxEEPfmjuYYArH8MuN62XJRakmct5MxWGCDtBppD=s650-rw"
    },
    {
        nombre: "Compota Baby Evolution Orgánica Pera Mango Espinaca Sin Azúcar X 90 Gr",
        precio: 6600,
        categoria: ["niños"],
        stock: 270,
        imagen: "https://lh3.googleusercontent.com/ZeL55T-34Pae1PowPvuoC8dSloeflZnSh_5wMLEWSkim2J3LMPUEYijgFodq7FeEq5T9gPqc6H-sGxNyp5o6qKOGW0RLOhDQ9fM9OwIQSwgN_X4xxg=s650-rw"
    },
    {
        nombre: "Cereal Gerber Puffs Sabor Banano Fresa X 50 Gr",
        precio: 16400,
        categoria: ["niños"],
        stock: 35,
        imagen: "https://lh3.googleusercontent.com/nSkMvN4GVS934y1BHMdqlaQH69q1od69v8CZl4mZXPzq3ZoX0xsTWgqHIBC9QPnIB1n_kKhFZq1d25Nf0lICCM1dyvxkkKGt9Lb_gFJETCHCfeI3_g=s650-rw"
    },
    {
        nombre: "Cereal Nestum Trigo Miel Único Con Probióticos X 200 Gr",
        precio: 12000,
        categoria: ["niños"],
        stock: 28,
        imagen: "https://lh3.googleusercontent.com/1eC4O0ci_GQNmMXjnwj382Mr93lD0i9QBldShV8pCxCccgbcHeySKp762EQDnlb4BvH6Imgz3f73DZjPEWI-Fa_PP_BR0uTeiQ2z7VMeMX9wgG4=s650-rw"
    },
    {
        nombre: "Cereal Infantil Mah 5 Cereales x 200 gr",
        precio: 11500,
        categoria: ["niños"],
        stock: 57,
        imagen: "https://lh3.googleusercontent.com/QCuYmtKssF50fvJ582rWd_hZvziJnLSZqwRquyTCi7wbiUo094nRq8-d8KaHzrBCIL8zCjeZzr6XwdGAU1dsgePZrfeslXwSincYyEjPVDtxzbgB4w=s650-rw"
    },
    {
        nombre: "Galletas Gerber Para Bebes 10meses+ Caja X 10 Und",
        precio: 13950,
        categoria: ["niños"],
        stock: 42,
        imagen: "https://lh3.googleusercontent.com/7ia3PXLfafscZYdWdCo4LXue0A3uwWvjssstreEKXB5AjskX03M2VaJBbIc1S4Y9YI9rmPPImaFtnu-m-5dq04DSsTLSUFARHOv-Rbl3MgyE9W_0Dg=s650-rw"
    },
    {
        nombre: "Galletas Infantiles Máh Banana +6 Meses X 100 Gr",
        precio: 17300,
        categoria: ["niños"],
        stock: 31,
        imagen: "https://lh3.googleusercontent.com/P9zIMYZ-C1D6hrIzkRykq9SeiGkTyYrMkuVU66XXzo5Li6kXwBTmUat92AzUVwemUmRs825ctV3UU6bqoffsmPaYm_gz_7fhFHYquYMJzn4Vl7ddEw=s650-rw"
    },
    {
        nombre: "Cereal Nestum De Trigo Manzana Y Banano X 200 Gr",
        precio: 13100,
        categoria: ["niños"],
        stock: 39,
        imagen: "https://lh3.googleusercontent.com/zDvPiXkRuUouT6ahCzcdDq8zRunsx2gXpFNdDf5s35O8FeVRIoZo_9guQ1ZK4QoLauoqAeEIr0GzILQ548QPKA1c9CGBfrHZI4hngqM-_DIjPxqu7A=s650-rw"
    },
    {
        nombre: "Compota Heinz Colado Pera X 113 Gr",
        precio: 3900,
        categoria: ["niños"],
        stock: 120,
        imagen: "https://lh3.googleusercontent.com/K9N16wkpgAB1FX9urVA3Qp1WGTjMYCFog556ZD_U88pi0N0fI6lKqwT_fuafyUH_RyKYxxgENSFQbJ80IAPBS7h8ZcJ09L0CCHOswiWUKhHOZC0y=s650-rw"
    },
    {
        nombre: "Compota Gerber Puré De Mango Sin Azúcar Frasco X 113 Gr",
        precio: 4600,
        categoria: ["niños"],
        stock: 175,
        imagen: "https://lh3.googleusercontent.com/sG3pM6XjR1YKVZJQjnzBmhGAz8PdNMC_yALilhwKbTsdKCMlCiYTMzse76gjgbfUBFKwKzxJTSkzvBKrEwESL9B_Ymb5-xOU5cMcPWJxw_S4bfpUQQ=s650-rw"
    },
    {
        nombre: "Compota Gerber Puré De Manzana Sin Azúcar Frasco X 113 Gr",
        precio: 4600,
        categoria: ["niños"],
        stock: 225,
        imagen: "https://lh3.googleusercontent.com/czyTBxED37yd4JgUAVYnz1rUdFjT7NwBNI83-wrI6mc6NFH0EKU8eRJsqE9Z9ZpWtbgtyz8soEXsfH-Sr9lfitdnO5tBhre_vhrDY1SC6KmdFfJP=s650-rw"
    },
    {
        nombre: "Compota Heinz Colado Manzana X 113 Gr",
        precio: 3950,
        categoria: ["niños"],
        stock: 205,
        imagen: "https://lh3.googleusercontent.com/orNcFedUvGF1R5dvnOG3gdJcEY9Y2Px3PVREbBEiLc6H586J9jo94Gqq5-QAYJawiOy9maZ_4nKftQi09Mh9PJpX8JwRqwwfEodHwOaPmYicCaqw=s650-rw"
    },
    {
        nombre: "Compota Heinz Colado Ciruelas Pasas X 113 Gr",
        precio: 3950,
        categoria: ["niños"],
        stock: 183,
        imagen: "https://lh3.googleusercontent.com/SNMADayK1icQ8htuyBfnO6Ul80CCRaGNP4HAN-KXCsp9saYG4wy_p-j5jlgLrLQGtBnAFzrBpzA41MykUfLzQzTPtkOcGAUpFaHqZHkLCSUdyfTwxw=s650-rw"
    },
    {
        nombre: "Compota San Jorge Trocitos Mango X 145 Gr",
        precio: 4500,
        categoria: ["niños"],
        stock: 95,
        imagen: "https://lh3.googleusercontent.com/76AUrmnNl9WVQruNLnbM9gaD9HngZGf2HFgRoKlLprN7Kbqi8XoCKSWYrNLCBhd9Qmc5ZoIPAvLQhDWbAYUROBy7FlygZ7G9iXLw4afCisDVeQXhIQ=s650-rw"
    },
    {
        nombre: "Compota San Jorge Trocitos Manzana X 145 Gr",
        precio: 4500,
        categoria: ["niños"],
        stock: 85,
        imagen: "https://lh3.googleusercontent.com/oCdc_dBv0jmU6yaUJQN6rh9KTNTw-1vLXZLcEpfHlqOFfayT6-MPpKrz8WznSyLC2Fy8hl0SlPy3TVUEt9VHqE_wwYzWXl8_gumawl7LB6K97jsB=s650-rw"
    },
    {
        nombre: "Toallitas Húmedas Pequeñín Antibacterial X 40 Und",
        precio: 6950,
        categoria: ["niños"],
        stock: 33,
        imagen: "https://lh3.googleusercontent.com/ZyC7489ZeMSdTdnaH7NQ31r5fhv6g5vIzqFMSawyz8Ai6ivEsPareJSy_hI39Y1RGixrHjt0DEwegQ_ChBcEJ3i2sL1tbtUEEvmTGvTjiK8GQRo=s650-rw"
    },
    {
        nombre: "Toallitas Humedas Huggies Active Fresh X 48und",
        precio: 8950,
        categoria: ["niños"],
        stock: 72,
        imagen: "https://lh3.googleusercontent.com/kxult-pO7A96IiHETDKWXKE2mKmaZleVIjFHb2T2c2Qjm0Mgfa9xtdING6D0OR6LWkMvQf89qwF2963A3DK64VlzNb0K0tImnjWBhtRhbe1vT7LNtg=s650-rw"
    },
    {
        nombre: "Pañal Winny Ultratrim Gold Etapa 4 X 50 Und",
        precio: 79950,
        categoria: ["niños"],
        stock: 25,
        imagen: "https://lh3.googleusercontent.com/DnztO_t6LH5kNShUJ5cACge9LEgccZ9YoxrZpTTvYNa1fitf8bd6pI-clhOmtravMkaK5iUjshwnTxtDS9Q2Hg5rridRf9U8nbsMQCFs3ksMje5XTA=s650-rw"
    },
    {
        nombre: "Pañales Winny Pants Xxg Etapa 5 X 30 Und",
        precio: 42750,
        categoria: ["niños"],
        stock: 18,
        imagen: "https://lh3.googleusercontent.com/A4E5Az_vvPvCkMi5duR9LVTj1JFCyYgEqF12M4OO16MLT9ocZx8-CZx34dNxd9pdPayEr5I79ZRvC2JNaBMf2Wps7aHFOhOtqmnJjNT_XYeie9Fa=s650-rw"
    },
    {
        nombre: "Pañales Winny Ultratrim Gold Etapa 6 X 30 Und",
        precio: 60950,
        categoria: ["niños"],
        stock: 41,
        imagen: "https://lh3.googleusercontent.com/y1lMLzEM__oN1qenZuKZPefhxDdrGwDajTOKsVJHoeZ7BPMeAKAKhrmtQQGxgV0-v4QJMLVHhhHeAuALlNgzh1Dhz9ElrmSdKk7ArGsPevNWNYLR=s650-rw"
    },
    {
        nombre: "Pañales Winny Sensitive Etapa 0 Recién Nacido X 30 Und",
        precio: 21950,
        categoria: ["niños"],
        stock: 48,
        imagen: "https://lh3.googleusercontent.com/Vtn4oh7KK01RW9-nPLGI8KCoR5E0lHTwUlcxr1_1DaFQRfwu4i4fz8Wowqc0xAddCU1hJi9WKXSgxBbIRbnRoT4vy5G_A6xk6HXGZ_dbGU2vbuBL=s650-rw"
    },
    {
        nombre: "Pañales Winny Gold G Etapa 3 X 60 Und",
        precio: 80450,
        categoria: ["niños"],
        stock: 30,
        imagen: "https://lh3.googleusercontent.com/qJUJBbLt4sEoblZGncSp9elBewqsezdhWXA9p2Eqjg-wFudxJbCkxS5RhUzGd09bOBKswrb6D_ng8eVHRZDVJ_za3oefOA-11aa2IoTfL2_iRQ0abw=s650-rw"
    },
    {
        nombre: "Pañal Winny Sensitive Gold Et 1 X 30 Und",
        precio: 28450,
        categoria: ["niños"],
        stock: 50,
        imagen: "https://lh3.googleusercontent.com/GxT6wfTsWsBmEpmzseQY4N1yl2Gg8W-QhyEUnSq7OkP05BR3iys0LD2VhWLfx29ehcOD4ZH-eiT2OON1oNxo-7QoZeoNnvgieTBt-F-Jo-n0R1k=s650-rw"
    },
    {
        nombre: "Pañales Winny Sensitive + Toallas Húmedas Etapa 2 x 70 und",
        precio: 74700,
        categoria: ["niños"],
        stock: 55,
        imagen: "https://lh3.googleusercontent.com/89L7z381po7DH53w6-OhlMwBjVQa7lrAIo7CqZuz4dnZyIy2Cd72NNvQVh3MXD5Ezr7UDd__-ad79wkmH_Oxx-PJeKZ8scdVGGbEixym1ecJO3VN=s650-rw"
    },
    {
        nombre: "Fórmula Infantil Nan Optipro Etapa 1 Lata X 400 Gr",
        precio: 63950,
        categoria: ["niños"],
        stock: 51,
        imagen: "https://lh3.googleusercontent.com/z_H5xLxFTtSJasG0qT1TG8p4knOwRatZbCLUuOnvBbpsBQbx_Q2sTUBmNxSOx9pHoxkmaanyjZwEcdYXu6hkEBnUUk1j5XAWD493KSCUEB5trBJe=s650-rw"
    },
    {
        nombre: "Fórmula Infantil Enfamil Premium 1 Dha+mfgm X 375 Gr",
        precio: 78950,
        categoria: ["niños"],
        stock: 25,
        imagen: "https://lh3.googleusercontent.com/t0Kzo3vw_ff-Bldwzhbwmm1KqroESr0VFoXyYqkkhPxgdJZCCwhYB8SkeG3_f8Jczrq3XCtoUwGeOBvOvsuQoX5Yr5-cy4bCsPWRhpKi6Wvae2Q=s650-rw"
    },
    {
        nombre: "Shampoo Johnsons Original X 400 Ml",
        precio: 24450,
        categoria: ["niños"],
        stock: 19,
        imagen: "https://lh3.googleusercontent.com/Kc4BTUNyjs8wEdJ2B8P1rt7KcM1_b5UxJC9IlKTAdkORDn5FbqqKFD0LqoToqXsFcUNlBxLpq14b6fzpDATzQmdJ4qW5eAKCUQEXO8M5lEdEKw2M=s650-rw"
    },
    {
        nombre: "Shampoo Johnsons Manzanilla X 400 Ml",
        precio: 24450,
        categoria: ["niños"],
        stock: 39,
        imagen: "https://lh3.googleusercontent.com/P93dZkKyQqhFR-AN5rpzaYixPcJOuyVHSRyeA7TWqnfhQoTxOV5V1sYQ--FYPJV_tqZCUrVgv4shXlJdq_MsH_Dw6N3lv2j8wu4OewM03kTzWPo=s650-rw"
    },
    {
        nombre: "Jabón Bebé Johnsons Humectante Tripack X 330 Gr",
        precio: 12900,
        categoria: ["niños"],
        stock: 113,
        imagen: "https://lh3.googleusercontent.com/FwiPz5Kwb9fXDzP9tadd08Ns1_ywf47tR0W-2cgzmHVYeIm2hoOY3eKS76R5w8OdMbdsmYDWmfR50dBrNER1dq--JNJ73s0rXbYRmpKcIVPZsOE=s650-rw"
    },
    {
        nombre: "Cepillo Para Tetero Bebé Dr Browns X 1und",
        precio: 45950,
        categoria: ["niños"],
        stock: 15,
        imagen: "https://lh3.googleusercontent.com/gKV4KKycVmv97EIPXJNE6yexruIaeAGoM_KPOYAe419AFf-3nUjMZSm1haKfNHqkFxfFhgL4wyIRetfBf1HYnhx_Qhv8K3sLhIxRyi5dMSNk8msYlw=s650-rw"
    },
    {
        nombre: "Tetero Dr Browns 9 Oz Estandar Options Rosado X 1 Und",
        precio: 74950,
        categoria: ["niños"],
        stock: 46,
        imagen: "https://lh3.googleusercontent.com/f62e_pU-thh9iSm_7FqIVEsuAXajph5LpKCVoCo7VZK-LtDZZGDL_S-yzFf_ARJc960Oe8PBw9AgR5-Y5PgxNMSJOYfA0G6ZV_HJrs4lrmyeH1bX=s650-rw"
    },
    {
        nombre: "Tetero Dr Browns 9 Oz Estandar Options Azul X 1 Und",
        precio: 74950,
        categoria: ["niños"],
        stock: 57,
        imagen: "https://lh3.googleusercontent.com/_mj-sUAxuDw2SgwC4m-BCtrg-NLmFMbLdb-CV83iBfbkf6rakysktY0gfWUZyc5bNSm69fyhMwMxVtKnOPVTJi_cKQopE8iB7iWhyaMb-wpdleA=s650-rw"
    },
    {
        nombre: "Chupo Dr Browns Entretención Etapa 2 Advantage X 2 Und",
        precio: 51000,
        categoria: ["niños"],
        stock: 16,
        imagen: "https://lh3.googleusercontent.com/Bne_Rr8wRHwvVaCmXg6hNV7NfNbWS7CmY64xgVFtLmYf7SMd9pqE6tSFYCuIZqFMQGX2DbHr4iAbsh_tt-6su3RXfPwzdlOWoISwktWhqsCYvh8=s650-rw"
    },
    {
        nombre: "Chupo Entretención Dr Browns Happy Surtido X 2 Und",
        precio: 29900,
        categoria: ["niños"],
        stock: 74,
        imagen: "https://lh3.googleusercontent.com/tKA0uwSLPK59ozGzj_T10GeQIF7MS6Mmv70V_6ndXwW91pPJ78UvLbButURRNjEebELCMubZ0B-vC9GmrQ8W_b-iuqLJGGCSEYSMPZ_CwV5PahVa_Q=s650-rw"
    },
    {
        nombre: "Pestañina esika mega full size",
        precio: 40100,
        categoria: ["belleza"],
        stock: 25,
        imagen: "https://belcorpcolombia.vtexassets.com/arquivos/ids/971349-1600-auto?v=638616000144230000&width=1600&height=auto&aspect=true"
    },
    {
        nombre: "Rubor esika compacto",
        precio: 50100,
        categoria: ["belleza"],
        stock: 25,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_763673-MCO50055533055_052022-O.webp"
    },
    {
        nombre: "CY° - Zone Labial Studio Look Mate, rosa empolvada",
        precio: 20000,
        categoria: ["belleza"],
        stock: 40,
        imagen: "https://m.media-amazon.com/images/I/41GaV3tP4hL._AC_SL1200_.jpg"
    },
    {
        nombre: "Corrector Maybelline",
        precio: 50000,
        categoria: ["belleza"],
        stock: 30,
        imagen: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00004155456750L.jpg"
    },
    {
        nombre: "DELINEADOR LIQ RESIST NEGRO 4ML VOGUE",
        precio: 14500,
        categoria: ["belleza"],
        stock: 30,
        imagen: "https://cdn.awsli.com.br/600x1000/7/7753/produto/56471572/f978bc782b.jpg"
    },
    {
        nombre: "Base liquida mac-mate",
        precio: 60000,
        categoria: ["belleza"],
        stock: 30,
        imagen: "https://blushbar.vtexassets.com/arquivos/ids/204355-800-800?v=638497613967030000&width=800&height=800&aspect=true"
    },
    {
        nombre: "Paleta de Sombras Ultra Pigmentación Larga Duración Neutral Nudes",
        precio: 30000,
        categoria: ["belleza"],
        stock: 25,
        imagen: "https://www.yanbal.com/medias/500Wx500H-Yanbal-OriginalFormat-20013424-02.jpg?context=bWFzdGVyfGltYWdlc3w1NTk1OHxpbWFnZS9qcGVnfGFHTm1MMmc1WWk4eE1ETXlNakU0T0RNd05EUXhOQzgxTURCWGVEVXdNRWhmV1dGdVltRnNMVTl5YVdkcGJtRnNSbTl5YldGMFh6SXdNREV6TkRJMFh6QXlMbXB3Wnd8OWJlNTYyNjRhYzU0NTAxN2NkNjBmMjJlYWYyNDVkOWQ2YjYwN2NmMzFjYjE3MWMxYTE0YjY2YTcxNWFlYjg4Mg"
    },
    {
        nombre: "Iluminador ani-k compacto",
        precio: 30000,
        categoria: ["belleza"],
        stock: 40,
        imagen: "https://purpuremakeup.com/wp-content/uploads/2024/07/1000X100_TONO_01_ABIERTO_ebb44885-6184-49aa-9dce-1cc2ca948bd3.webp"
    },
    {
        nombre: "Contorno en barra ",
        precio: 20000,
        categoria: ["belleza"],
        stock: 35,
        imagen: "https://ettos.co/cdn/shop/files/CONTORNO01_1_437a7f13-ba36-4aac-8a63-b98e54ac1cc0.png?v=1712967875"
    },
    {
        nombre: "Pestañina tranasparente Samy",
        precio: 8000,
        categoria: ["belleza"],
        stock: 25,
        imagen: "https://maquillajeshimmer.com/wp-content/uploads/2020/10/pestanina-transparente.jpg"
    },
    {
        nombre: "Bloqueador solar ",
        precio: 40000 ,
        categoria: ["belleza"],
        stock: 40,
        imagen: "https://lh3.googleusercontent.com/QeGzLTiotuh2ayRPBV6QpoCo-kJjFSDgdFwbCIS3A2smuhmYTWaA4pV-d0Y2zOYpSKvvQZC07Ugre27Wo1W7CSlOIMbFsLL8lwxNqI5kWXzOE4B6JA=s360"
    },
    {
        nombre: "Protectores Diarios Nosotras Multiestilo Paquete X 15 Und",
        precio: 6000,
        categoria: ["belleza"],
        stock: 40,
        imagen: "https://lh3.googleusercontent.com/2ZiOAGrK8Ow8oJSrHK4QIEhRVYTu8vI_mH-yQv7Xrz_j-1CGrBpayzAAOChBYOYDxhvV9mi62-Mw5umP1bWaH0BkGzSMzhy0G5xifawhcdVANZ_7=s360"
    },
    {
        nombre: "Crema hidratante facial en gel Neutrogena® Hydro Boost® Ácido Hialurónico 50g",
        precio: 70000,
        categoria: ["belleza"],
        stock: 60,
        imagen: "https://www.neutrogena.com.co/sites/neutrogena_co/files/styles/product_image/public/hb-watergel_01.jpg"
    },
    {
        nombre: "Agua Micelar Desmaquillante Garnier Skinactive 400 mL "  ,
        precio: 21000,
        categoria: ["belleza"],
        stock: 32,
        imagen: "https://www.drogueriasanjorge.com/wp-content/uploads/2024/04/AGUA-MICELAR-DESMAQUILLANTE-ORIGINAL-GARNIER-400ML-300x300.jpg"
    },
    {
        nombre: "Agua de rosas",
        precio: 8000,
        categoria: ["belleza"],
        stock: 30,
        imagen: "https://aratiendas.com/wp-content/uploads/2024/03/AGUA-ROSAS-BE-BEAUTY-X250ML.png"
    },
    {
        nombre: "Contorno de ojos cetaphil",
        precio: 20000,
        categoria: ["belleza"],
        stock: 25,
        imagen: "https://www.cetaphil.com.co/dw/image/v2/BGGN_PRD/on/demandware.static/-/Sites-galderma-co-m-catalog/default/dw3277a2cd/3499320011686CO-1/CP_CONTORNOOJOS_BLANCO_3000X3000.jpg?sw=900&sh=900&sm=fit&q=85"
    },
    {
        nombre: "Niacidamida The Ordinary",
        precio: 40100,
        categoria: ["belleza"],
        stock: 25,
        imagen: "https://cdn.natural.com.py/storage/App/Models/ProductImage/000/004/274/image/xlarge/61K5tcI6JBL.jpg"
    },
    {
        nombre: "Express Aclara Serum Anti Manchas con Vitamina C | Garnier",
        precio: 59999,
        categoria: ["belleza"],
        stock: 25,
        imagen: "https://www.garnier.com.co/-/media/project/loreal/brand-sites/garnier/usa/latam/es/prd-facecare/express-aclara-booster-serum-anti-manchas/new-11242022/1.jpg?w=1200&rev=37f2931fd75b442baa855b690f72d276&hash=A1965B02CA34FC4C18BE494760A200F6"
    },
    {
        nombre: "Garnier - Skin Active Mascarillas - CARBÓN ACTIVADO",
        precio: 37000,
        categoria: ["belleza"],
        stock: 25,
        imagen: "https://avobeauty.mx/cdn/shop/products/CARBON_2048x2048.jpg?v=1632365816"
    },
    {
        nombre: "Garnier Skin Renew Dark Spot Corrector De Manchas Por Acne Tipo De Piel Grasa",
        precio: 39000,
        categoria: ["belleza"],
        stock: 30,
        imagen: "https://http2.mlstatic.com/D_Q_NP_633711-MLU72227410299_102023-O.webp"
    }

];



let users = [
    {
        usename: "admin",
        pass: "compaq",
        nombre: "Admin Super",
        fechaNacimiento: "05/05/1997",
        document: "2222222",
        verified: true
    }
]

// function login(username="", pass=""){

//     for(let user of users){

//         if(username === user.usename){

//             if(pass === user.pass){

//                 // inicio de sesion exitoso
//                 return localStorage.setItem('status', 'logged')

//             }

//         }
//     }

//     return alert('usuario/contraseña incorrectos')

// }

// login("admin", "compaq")