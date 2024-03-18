function Footer() {
    return (
      <footer className="bg-orange text-gray-400 py-12 ">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
            <p className="mb-4 text-white">
         Skill Chaat is a website that Offer various courses including web development Course. 
            </p>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
              <li>
                <a
                  href="#"
                  className="text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="./about"
                  className="text-white transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="./courses"
                  className="text-white transition-colors duration-300"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="./contact"
                  className="text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100090858772914" target="_blank"
                className="text-white transition-colors duration-300"
              >
                Facebook
              </a>
              <a
                href="https://www.youtube.com/channel/UC7M15WtO28HihSrCfaya3pQ"target="_blank"
                className="text-white transition-colors duration-300"
              >
                Youtube
              </a>
              <a
                href="https://www.linkedin.com/in/syeda-hafsa-67b7342ab/" target="_blank"
                className="text-white transition-colors duration-300"
              >
                Linkedin
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
            <p className="text-white">Karachi, Pakistan</p>
            <p className="text-white">Email: syedahafsa772@gmail.com</p>
            <p className="text-white">Phone: +92 3378029887</p>
          </div>
          </div>
          <p className="text-center text-xs pt-8 text-white">© 2024 Skill Chaat. All rights reserved.</p>
      </footer>
    )
  }
  
  export default Footer