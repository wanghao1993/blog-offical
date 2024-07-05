import MainLayout from "@/components/Layouts/MainLayout";

export default function About() {
  return (
    <>
      <MainLayout>
        <header className="py-12 bg-muted">
          <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
            {/* <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar> */}
            <h1 className="text-3xl font-bold mb-2">John Doe</h1>
            <p className="text-muted-foreground">Software Engineer</p>
          </div>
        </header>
        <main className="py-12 container mx-auto px-4 md:px-6 grid gap-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <div className="prose max-w-[700px]">
              <p>
                Hi there! I'm John, a passionate software engineer with a love
                for building innovative and user-friendly applications. With a
                strong background in computer science and a keen eye for design,
                I strive to create solutions that not only solve problems but
                also delight users.
              </p>
              <p>
                In my free time, you can find me exploring the great outdoors,
                reading the latest tech blogs, or tinkering with new
                technologies. I'm always eager to learn and grow, and I'm
                excited to share my knowledge and experiences with others.
              </p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <h3 className="text-xl font-semibold">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-muted-foreground">
                  University of California, Berkeley
                </p>
                <p className="text-muted-foreground">2015 - 2019</p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-xl font-semibold">High School Diploma</h3>
                <p className="text-muted-foreground">Acme High School</p>
                <p className="text-muted-foreground">2011 - 2015</p>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <h3 className="text-xl font-semibold">Software Engineer</h3>
                <p className="text-muted-foreground">Acme Inc.</p>
                <p className="text-muted-foreground">2019 - Present</p>
                <div className="prose">
                  <ul>
                    <li>
                      Developed and maintained web applications using React,
                      Node.js, and MongoDB
                    </li>
                    <li>
                      Collaborated with cross-functional teams to design and
                      implement new features
                    </li>
                    <li>
                      Participated in code reviews and mentored junior
                      developers
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid gap-2">
                <h3 className="text-xl font-semibold">Intern</h3>
                <p className="text-muted-foreground">Mega Corp.</p>
                <p className="text-muted-foreground">Summer 2018</p>
                <div className="prose">
                  <ul>
                    <li>
                      Assisted in the development of a mobile app using React
                      Native
                    </li>
                    <li>
                      Participated in agile development practices and daily
                      stand-ups
                    </li>
                    <li>
                      Gained experience in project management and client
                      communication
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Interests</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center gap-2">
                {/* <MountainIcon className="w-8 h-8" /> */}
                <span>Hiking</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                {/* <BookIcon className="w-8 h-8" /> */}
                <span>Reading</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                {/* <CameraIcon className="w-8 h-8" /> */}
                <span>Photography</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                {/* <CodeIcon className="w-8 h-8" /> */}
                <span>Coding</span>
              </div>
            </div>
          </section>
        </main>
        <footer className="py-6 bg-muted text-center text-muted-foreground">
          <p>&copy; 2023 John Doe. All rights reserved.</p>
        </footer>
      </MainLayout>
    </>
  );
}
