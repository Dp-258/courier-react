import React from 'react'

function Footer() {
    return (
        <>
            <div class="b-example-divider"></div>

            <div class="bg-white ">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 mx-5 border-top">
                    <div class="col-md-4 d-flex align-items-center">
                        <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            <i className="fa-solid fa-house fa-fw"></i>
                        </a>
                        <span class="mb-3 mb-md-0 text-muted">&copy; 2023 Multicourier, Inc</span>
                    </div>

                    <ul class="nav col-md-2 justify-content-end list-unstyled d-flex"> 
                        <li class="ms-3"><a class="text-muted" href="https://twitter.com/home?lang=es"><i className="fa-brands fa-twitter fa-fw"></i></a></li>
                        <li class="ms-3"><a class="text-muted" href="https://twitter.com/home?lang=es"><i className="fa-brands fa-instagram fa-fw"></i></a></li>
                        <li class="ms-3"><a class="text-muted" href="https://twitter.com/home?lang=es"><i className="fa-brands fa-facebook fa-fw"></i></a></li>
                        </ul>
                </footer>
            </div>
        </>
    )
}

/* <ul> align-items-center*/
export default Footer