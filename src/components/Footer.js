import React from 'react'

function Footer() {
return (
    <footer className="text-center text-white flex-end" style={{background : "#f1f1f1"}}>
        <div class="container pt-2">
            <section class="mb-1">
                <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
                ><i class="fab fa-facebook-f"></i>
                </a>

                <a
                    class="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i class="fab fa-twitter"></i
                ></a>

                <a
                    class="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i class="fab fa-google"></i>
                </a>

                <a
                    class="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i class="fab fa-instagram"></i>
                </a>

                <a
                    class="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i class="fab fa-linkedin"></i>
                </a>
                
                <a
                    class="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i class="fab fa-github"></i>
                </a>
            </section>
            </div>
            <div class="text-center text-dark text-blod p-2" >
            © 2023 Copyright By 
            {/* <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a> */}
        </div>
    </footer>
  )
}

export default Footer