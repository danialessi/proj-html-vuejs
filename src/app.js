var app = new Vue (
    {
        el: '#root',
        data: {
            // socials
            socials: [
                {
                    icon: '<i class="fab fa-facebook-f"></i>',
                    link: 'https://www.facebook.com'
                },
                {
                    icon: '<i class="fab fa-twitter"></i>',
                    link: 'https://twitter.com'
                },
                {
                    icon: '<i class="fab fa-pinterest-p"></i>',
                    link: 'https://www.pinterest.it'
                }
            ],

            // navbar list 
            navbarArray: [
                {
                    name: 'home',
                    link: '#'
                },
                {
                    name: 'about',
                    link: 'https://www.google.it'
                },
                {
                    name: 'services',
                    link: '#'
                },
                {
                    name: 'showcase',
                    link: '#'
                },
                {
                    name: 'blog',
                    link: '#'
                },
                {
                    name: 'contact',
                    link: '#'
                }
                
            ],

            // FOOTER 
            // footer-logo
            footer_logo: {
                image_path: 'img/cropped-Group-39-2x.png',
                paragraph: 'While the lovely valley teems with vapur around me, and the merdian sun strikes the upper surface of the impnetrable floiage of my trees. While the lovely valley teems with vapour around me.'
            },

            // quick links
            quick_links: [
                {
                    name: 'Careers',
                    link: '#'
                },
                {
                    name: 'News',
                    link: 'https://www.google.it'
                },
                {
                    name: 'Terms of use',
                    link: '#'
                },
                {
                    name: 'Privacy Projects',
                    link: '#'
                },
                {
                    name: 'About',
                    link: '#'
                },
                {
                    name: 'Contact',
                    link: '#'
                }
            ],

            // contact
            contact: {
                name_address: 'Patricia C. Amedee 2201 Waldeck Street Grapevine Nashville, TX 76051',
                contact_mail: 'info@yourdomain.com',
                phone: '+99 (0) 101 0000 888'
            },

            // map
            map: {
                image: 'img/map.png'
            }
        },
        
        methods: {
            
            // back to the top of page 
            backToTop() {
                document.documentElement.scrollTop = 0;
            }
        }
    }
)