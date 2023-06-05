
import './CoursesPage.css'
function Curses() {
    return (
        <div className='Courses'>
            <header>
                <div className="wrap">
                    <div>
                        <a className="logo" href="https://codeacademy.lt/">
                            <img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/codeacademy-black.svg"
                                width="115" height="35" alt="CodeAcademy" className="alternate" />
                        </a>
                    </div>
                    <div className="sarasas">
                        <ul>
                            <li><a href="https://codeacademy.lt/studentams/">Studentams</a></li>
                            <li><a href="https://codeacademy.lt/programavimo-kursai/">Programos</a></li>
                            <li><a href="https://codeacademy.lt/apie/karjeros_centras/">Karjieros centras</a></li>
                            <li><a href="https://www.codeacademy.lt/testas/">IT testas</a></li>
                            <li><a href="https://codeacademy.lt/apie/">Apie mus</a></li>
                            <li><a href="https://codeacademy.lt/verslui/">Verslui</a></li>
                            <li><a href="https://codeacademy.lt/kontaktai/">Kontaktai</a></li>
                            <li><a href="https://codeacademy.lt/en/contacts/">LT</a></li>
                        </ul>
                        <div className="mygtukas">
                            <a href="tel:+37066366555">Skambinti</a>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div class="wrap">
                    <section class="vidurys">
                        <div class="button-2">Filtruoti</div>
                        <h1>Programos</h1>
                        <div class="vidurys-wrap">
                            <a class="naujas-img" href="">
                                <div class="img-textas" >
                                    <span>Nežinai ką pasirinkti?</span>
                                    <span>Spręsk IT testą</span>
                                </div>
                                <div class="naujas-img-desine"></div>
                            </a>
                            <div class="pasirinkimai">
                                <h2>Rastos 6 programos</h2>
                                <div class="pasirinkiamai-list">
                                    <div class="list-items">
                                        <label for="vienas">Tema</label>
                                        <select name="vienas" id="">
                                            <option value="visos">visos</option>
                                            <option value="Dizainas">Dizainas</option>
                                            <option value="antras">antras</option>
                                            <option value="trecias">trecias</option>
                                        </select>
                                    </div>
                                    <div class="list-items">
                                        <label for="du">Vieta</label>
                                        <select name="du" id="">
                                            <option value="visos">Visos</option>
                                            <option value="Dizainas">Dizainas</option>
                                            <option value="antras">Dizainas</option>
                                            <option value="trecias">Dizainas</option>
                                        </select>
                                    </div>
                                    <div class="list-items">
                                        <label for="trys">Tipas</label>
                                        <select name="trys" id="">
                                            <option value="visi">Visi</option>
                                            <option value="Dizainas">Vienas</option>
                                            <option value="antras">Vienas</option>
                                            <option value="trecias">Vienas</option>
                                        </select>
                                    </div>
                                    <div class="list-items block">
                                        <label for="keturi">Laikas</label>
                                        <label for="c1"><input type="checkbox" name="keturi" id="c1" />Dienomis</label>
                                        <label for="c2"><input type="checkbox" name="keturi" id="c2" />Vakarais</label>
                                    </div>
                                    <button>Išvalyti</button>
                                </div>
                            </div>
                            <div class="vidurys-right">
                                <a href="http://">
                                    <div class="container-top">
                                        <img class="img-2" src="https://codeacademy.lt/wp-content/uploads/2021/05/UI_dark.svg" />
                                            <span>Finansuojama užt</span>
                                            <h2>Web dizainas UX/UI (223002606)</h2>
                                            <p>Web dizaineris privalo užtikrinti ne tik patrauklų svetainės vaizdą,
                                                informatyvumą,
                                                bet ir patogumą – suderinti pateikiamą informaciją, vaizdus bei navigaciją:
                                                kitaip
                                                tariant, įlįsti į vartotojo kailį.</p>
                                    </div>
                                    <div class="container-bottom">
                                        <ul>
                                            <li class="day">Dienomis</li>
                                        </ul>
                                    </div>
                                </a>
                                <a href="http://">
                                    <div class="container-top">
                                        <span>startas . 2023 rudenį</span>
                                        <img class="img-2"
                                            src="https://codeacademy.lt/wp-content/uploads/2021/03/Studijos101_dark-1.svg" />
                                            <h2>Studijos 101</h2>
                                            <p>Web dizaineris privalo užtikrinti ne tik patrauklų svetainės vaizdą,
                                                informatyvumą,
                                                bet ir patogumą – suderinti pateikiamą informaciją, vaizdus bei navigaciją:
                                                kitaip
                                                tariant, įlįsti į vartotojo kailį.</p>
                                    </div>
                                    <div class="container-bottom">
                                        <ul>
                                            <li class="night">Vakarais</li>
                                        </ul>
                                    </div>
                                </a>
                                <a href="http://">
                                    <div class="container-top">
                                        <img class="img-2" src="https://codeacademy.lt/wp-content/uploads/2021/05/UI_dark.svg" />
                                            <span>Finansuojama užt</span>
                                            <h2>Web dizainas UX/UI (223002606)</h2>
                                            <p>Web dizaineris privalo užtikrinti ne tik patrauklų svetainės vaizdą,
                                                informatyvumą,
                                                bet ir patogumą – suderinti pateikiamą informaciją, vaizdus bei navigaciją:
                                                kitaip
                                                tariant, įlįsti į vartotojo kailį.</p>
                                    </div>
                                    <div class="container-bottom">
                                        <ul>
                                            <li class="day">Dienomis</li>
                                        </ul>
                                    </div>
                                </a>
                                <a href="http://">
                                    <div class="container-top">
                                        <span>startas . 2023 rudenį</span>
                                        <img class="img-2"
                                            src="https://codeacademy.lt/wp-content/uploads/2021/03/Studijos101_dark-1.svg" />
                                            <h2>Studijos 101</h2>
                                            <p>Web dizaineris privalo užtikrinti ne tik patrauklų svetainės vaizdą,
                                                informatyvumą,
                                                bet ir patogumą – suderinti pateikiamą informaciją, vaizdus bei navigaciją:
                                                kitaip
                                                tariant, įlįsti į vartotojo kailį.</p>
                                    </div>
                                    <div class="container-bottom">
                                        <ul>
                                            <li class="night">Vakarais</li>
                                        </ul>
                                    </div>
                                </a>
                                <a href="http://">
                                    <div class="container-top">
                                        <img class="img-2" src="https://codeacademy.lt/wp-content/uploads/2021/05/UI_dark.svg" />
                                            <span>Finansuojama užt</span>
                                            <h2>Web dizainas UX/UI (223002606)</h2>
                                            <p>Web dizaineris privalo užtikrinti ne tik patrauklų svetainės vaizdą,
                                                informatyvumą,
                                                bet ir patogumą – suderinti pateikiamą informaciją, vaizdus bei navigaciją:
                                                kitaip
                                                tariant, įlįsti į vartotojo kailį.</p>
                                    </div>
                                    <div class="container-bottom">
                                        <ul>
                                            <li class="day">Dienomis</li>
                                        </ul>
                                    </div>
                                </a>
                                <a href="http://">
                                    <div class="container-top">
                                        <span>startas . 2023 rudenį</span>
                                        <img class="img-2"
                                            src="https://codeacademy.lt/wp-content/uploads/2021/03/Studijos101_dark-1.svg" />
                                            <h2>Studijos 101</h2>
                                            <p>Web dizaineris privalo užtikrinti ne tik patrauklų svetainės vaizdą,
                                                informatyvumą,
                                                bet ir patogumą – suderinti pateikiamą informaciją, vaizdus bei navigaciją:
                                                kitaip
                                                tariant, įlįsti į vartotojo kailį.</p>
                                    </div>
                                    <div class="container-bottom">
                                        <ul>
                                            <li class="night">Vakarais</li>
                                        </ul>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <footer className="apacia">
                <div className="wrap">
                    <div className="apacia-vidus">
                        <div className="logo">
                            <a href="https://codeacademy.lt/">
                                <img
                                    src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/codeacademy-white.svg"
                                    alt="CodeAcademy" /></a>
                        </div>
                        <div className="apacia-meniu">
                            <ul>
                                <li> <a href="http://">Studentams</a> </li>
                                <li><a href="http://">Karjeros centras</a></li>
                                <li><a href="http://">Programos</a></li>
                                <li><a href="http://">Užt 100% finansavimas</a></li>
                                <li><a href="http://">Programavimo kalbos</a></li>
                                <li><a href="http://">Apie mus</a></li>
                                <li><a href="http://">Naujienos</a></li>
                                <li><a href="http://">Karjera – We are hiring!</a></li>
                                <li><a href="http://">Verslui</a></li>
                                <li><a href="http://">ES parama</a></li>
                                <li><a href="http://">Kontaktai</a></li>
                            </ul>
                        </div>
                        <div className="apacia-meniu-desine">
                            <div className="apacia-meniu adresai">
                                <div className="miestas">vilnius</div>
                                <div className="adresas"><a href="http://">Saulėtekio al. 15,
                                    Vilnius</a></div>
                                <div className="adresas"><a href="http://">Antakalnio g. 17,
                                    Vilnius</a></div>
                            </div>
                            <div className="linkai">
                                <ul>
                                    <li>
                                        <a href="http://">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                width="30" height="31">
                                                <defs>
                                                    <path id="a" d="M0 .009h29.991v29.987H0z">

                                                    </path>
                                                </defs>
                                                <g fill="none" fillRule="evenodd">
                                                    <mask id="b" fill="#fff">
                                                        <use xlinkHref="#a"></use>
                                                    </mask>
                                                    <path fill="#929497"
                                                        d="M14.995.01c-4.072 0-4.583.017-6.182.09-1.596.072-2.686.326-3.64.697a7.34 7.34 0 00-2.656 1.73 7.344 7.344 0 00-1.73 2.655c-.37.954-.624 2.044-.697 3.64-.073 1.6-.09 2.11-.09 6.183 0 4.072.017 4.583.09 6.182.073 1.596.327 2.686.697 3.64a7.34 7.34 0 001.73 2.656 7.34 7.34 0 002.656 1.73c.954.37 2.044.624 3.64.697 1.6.073 2.11.09 6.182.09 4.073 0 4.583-.017 6.183-.09 1.596-.073 2.686-.327 3.64-.697a7.348 7.348 0 002.656-1.73 7.366 7.366 0 001.73-2.656c.37-.954.623-2.044.696-3.64.073-1.6.09-2.11.09-6.182 0-4.073-.017-4.583-.09-6.183-.072-1.596-.326-2.686-.697-3.64a7.348 7.348 0 00-1.73-2.656 7.37 7.37 0 00-2.655-1.73c-.954-.37-2.044-.624-3.64-.696-1.6-.073-2.11-.09-6.183-.09zm0 2.701c4.004 0 4.478.016 6.06.088 1.462.066 2.256.31 2.784.516.7.272 1.2.597 1.724 1.122.525.524.85 1.024 1.122 1.724.205.528.45 1.322.516 2.784.072 1.582.088 2.056.088 6.06s-.016 4.478-.088 6.06c-.066 1.461-.31 2.255-.516 2.784a4.644 4.644 0 01-1.122 1.724 4.634 4.634 0 01-1.724 1.121c-.528.206-1.322.45-2.784.517-1.581.072-2.056.087-6.06.087s-4.478-.015-6.06-.087c-1.461-.067-2.255-.311-2.784-.517a4.654 4.654 0 01-1.724-1.121 4.65 4.65 0 01-1.121-1.724c-.206-.529-.45-1.323-.517-2.785-.072-1.581-.087-2.055-.087-6.06 0-4.003.015-4.477.087-6.059.067-1.462.311-2.256.517-2.784.272-.7.597-1.2 1.121-1.724a4.652 4.652 0 011.724-1.122c.529-.205 1.323-.45 2.785-.516 1.581-.072 2.055-.088 6.06-.088z"
                                                        mask="url(#b)"></path>
                                                    <path fill="#929497"
                                                        d="M14.995 20.003a4.998 4.998 0 110-9.997 4.998 4.998 0 010 9.997zm0-12.699a7.7 7.7 0 10.002 15.4 7.7 7.7 0 00-.002-15.399zM24.8 7a1.8 1.8 0 11-3.6 0 1.8 1.8 0 013.6 0"
                                                        mask="url(#b)"></path>
                                                </g>
                                            </svg>
                                        </a>
                                    </li>
                                    <li><a href="http://"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
                                        <path
                                            d="M30 15.092C30 6.757 23.284 0 15 0 6.716 0 0 6.757 0 15.092 0 22.624 5.485 28.868 12.656 30V19.454H8.848v-4.362h3.808v-3.325c0-3.783 2.24-5.872 5.666-5.872 1.641 0 3.358.295 3.358.295v3.714h-1.892c-1.863 0-2.444 1.163-2.444 2.357v2.83h4.16l-.665 4.363h-3.495V30C24.514 28.868 30 22.624 30 15.092"
                                            fill="#929497" fillRule="evenodd"></path>
                                    </svg></a></li>
                                    <li><a href="http://"></a><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
                                        <path
                                            d="M27.783 0C29.007 0 30 .963 30 2.149v25.702C30 29.038 29.007 30 27.783 30H2.217C.993 30 0 29.038 0 27.852V2.149C0 .963.993 0 2.217 0h25.566zM9.094 11.566H4.563v13.547h4.531V11.566zm11.123-.317c-2.354 0-3.436 1.259-4.046 2.177l-.038.058v-1.917h-4.53c.017.372.024 1.69.025 3.367v1.558c-.003 3.46-.021 7.58-.025 8.454l-.001.156-.001.01h4.532v-7.563c0-.405.03-.81.15-1.099.327-.81 1.072-1.647 2.324-1.647 1.64 0 2.295 1.242 2.295 3.064v7.246h4.531v-7.767c0-4.161-2.235-6.097-5.216-6.097zM6.859 5.036c-1.55 0-2.563 1.011-2.563 2.34 0 1.3.983 2.341 2.504 2.341h.03c1.58 0 2.563-1.04 2.563-2.34-.03-1.33-.984-2.34-2.534-2.34z"
                                            fill="#929497"></path>
                                    </svg></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="apacia-apacia">
                        <div>© By UAB Programuok | CodeAcademy šeimos narys – <a style={{ color: 'white' }}
                            href="http://">CodeAcademy
                            Kids</a></div>
                        <div><a href="http://">Privatumo politika</a></div>
                    </div>
                    <div className="footer-certificates" style={{ marginTop: 15 + 'px' }}>
                        <img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/sertika.svg" width="97"
                            height="44" alt="Sertika ISO 14001" loading="lazy" />
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Curses