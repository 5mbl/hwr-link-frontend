const TeamMemberCard = ({ name, role, imageUrl }) => (
    <div className="bg-white shadow-lg rounded-lg p-4 text-center">
        <img src={imageUrl} alt={name} className="w-32 h-32 rounded-full mx-auto" />
        <h3 className="mt-4 font-bold">{name}</h3>
        <p className="text-sm text-gray-600">{role}</p>
    </div>
);

const ProjectTeamPage = () => {
    const teamMembers = [
        { name: 'Serdar Palaoglu', role: 'Lead Dev', imageUrl: 'https://zakxqorxaxrohdzocisr.supabase.co/storage/v1/object/sign/designs/236007_2023-09-09_14-26-08_16-removebg-preview%20(1).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXNpZ25zLzIzNjAwN18yMDIzLTA5LTA5XzE0LTI2LTA4XzE2LXJlbW92ZWJnLXByZXZpZXcgKDEpLnBuZyIsImlhdCI6MTcwMzIwMTMxMSwiZXhwIjoxNzM0NzM3MzExfQ.bCjoE4Sr3FzHVYY0nDBJdZvPl8LpJtBKFZjfqXyTuH4&t=2023-12-21T23%3A28%3A30.561Z' },
        { name: 'Jaafar Tahan', role: 'Manager + Dev', imageUrl: 'https://zakxqorxaxrohdzocisr.supabase.co/storage/v1/object/sign/designs/Screenshot_12.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXNpZ25zL1NjcmVlbnNob3RfMTIuanBnIiwiaWF0IjoxNzAzMjAxNDAwLCJleHAiOjE3MzQ3Mzc0MDB9.PGo6V6VWZgPgjCROQXHZgx0zlYgJ1sNCBmmEDDrmKqM&t=2023-12-21T23%3A29%3A59.518Z' },
        { name: 'Albatrit Makolli', role: 'Business Analyst + Dev', imageUrl: 'https://zakxqorxaxrohdzocisr.supabase.co/storage/v1/object/sign/designs/Screenshot_11.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXNpZ25zL1NjcmVlbnNob3RfMTEuanBnIiwiaWF0IjoxNzAzMjAxNDE2LCJleHAiOjE3MzQ3Mzc0MTZ9.plPSjV5vHMp4kXWXN1oc0K7vOjTp0QkHTyJyEGLdgjM&t=2023-12-21T23%3A30%3A15.480Z' },
        { name: 'Suheib Saaid', role: 'Marketing Specialist + Dev', imageUrl: 'https://zakxqorxaxrohdzocisr.supabase.co/storage/v1/object/sign/designs/WhatsApp%20Image%202023-12-22%20at%2000.20.18.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXNpZ25zL1doYXRzQXBwIEltYWdlIDIwMjMtMTItMjIgYXQgMDAuMjAuMTguanBlZyIsImlhdCI6MTcwMzIwMTM3MiwiZXhwIjoxNzM0NzM3MzcyfQ.gFUM_94Vrk0R8Kjga4NwSt-BXOo4CAExeJyH2Q_3CzI&t=2023-12-21T23%3A29%3A31.870Z' }
    ];
    // Tech stack data (replace with your actual tech stack)
    const techStack = [
        { name: 'React', imageUrl: 'https://zakxqorxaxrohdzocisr.supabase.co/storage/v1/object/sign/designs/React-icon.svg.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXNpZ25zL1JlYWN0LWljb24uc3ZnLnBuZyIsImlhdCI6MTcwMzIwNDA1MCwiZXhwIjoxNzM0NzQwMDUwfQ.WoPzLha2BvRnNd68qhBi7FLHxvhzis--lMYkZlqs0H4&t=2023-12-22T00%3A14%3A09.477Z', description: 'A JavaScript library for building user interfaces' },
        { name: 'Python', imageUrl: 'https://zakxqorxaxrohdzocisr.supabase.co/storage/v1/object/sign/designs/Python.svg.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXNpZ25zL1B5dGhvbi5zdmcucG5nIiwiaWF0IjoxNzAzMjA0MTE5LCJleHAiOjE3MzQ3NDAxMTl9.thxu1Cvmzq4HngwVzEwFhr_YKK8nMYRQGVcCp4R9lf4&t=2023-12-22T00%3A15%3A18.321Z', description: 'programming language used to build websites and software, automate tasks, and conduct data analysis' },
        { name: 'Tailwind CSS', imageUrl: 'https://zakxqorxaxrohdzocisr.supabase.co/storage/v1/object/sign/designs/Download.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXNpZ25zL0Rvd25sb2FkLnBuZyIsImlhdCI6MTcwMzIwNDEzMCwiZXhwIjoxNzM0NzQwMTMwfQ.CHxZcVxo10IEt5BZP8TLkE4cl-F_PQeEXQyh9TNLvBs&t=2023-12-22T00%3A15%3A29.700Z', description: 'A utility-first CSS framework' },
        { name: 'Supabase', imageUrl: 'https://zakxqorxaxrohdzocisr.supabase.co/storage/v1/object/sign/designs/54469796.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXNpZ25zLzU0NDY5Nzk2LnBuZyIsImlhdCI6MTcwMzIwNDIwOSwiZXhwIjoxNzM0NzQwMjA5fQ.pxVJkL5sHlUXcacSHwmaPVmQoyo9IR1pizEIypSzuP4&t=2023-12-22T00%3A16%3A48.218Z', description: 'Supabase provides a full Postgres database for every project with Realtime functionality' },
        { name: 'Render', imageUrl: 'https://zakxqorxaxrohdzocisr.supabase.co/storage/v1/object/sign/designs/Screenshot_13.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXNpZ25zL1NjcmVlbnNob3RfMTMuanBnIiwiaWF0IjoxNzAzMjA0NDEzLCJleHAiOjE3MzQ3NDA0MTN9.ii80oxQrfthvspu9SjHpOLgPjePVV204Srv8Q6bfovQ&t=2023-12-22T00%3A20%3A12.438Z', description: 'Render is a unified cloud to build and deploy apps' },
        { name: 'daisyUI', imageUrl: 'https://zakxqorxaxrohdzocisr.supabase.co/storage/v1/object/sign/designs/favicon-192.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXNpZ25zL2Zhdmljb24tMTkyLnBuZyIsImlhdCI6MTcwMzIwNDYwOCwiZXhwIjoxNzM0NzQwNjA4fQ.mWe_3sIq5v7w5bjsHFvGueFrW61u8yOYIcqjJAxMt4o&t=2023-12-22T00%3A23%3A28.076Z', description: 'daisyUI adds a set of customizable color names to Tailwind CSS' },


    ];
    return (
        <div className="max-w-7xl mx-auto px-8 py-8 lg:py-20">
            <section className="text-center mb-20">
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">Meet Our Team</h1>
                <p className="text-lg max-w-xl mx-auto">
                    Dedicated students behind the hwr.link project, working together to make academic resources more accessible.
                </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
                {teamMembers.map(member => (
                    <TeamMemberCard key={member.name} {...member} />
                ))}
            </section>
            {/* Tech Stack Section */}
            <div className="mt-10 mb-10">
                <h2 className="text-3xl font-bold text-center mb-6">Our Tech Stack</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {techStack.map((tech, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <img src={tech.imageUrl} alt={tech.name} className="w-20 h-20 mb-3" />
                            <h3 className="font-semibold mb-2">{tech.name}</h3>
                            <p className="text-gray-600">{tech.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <section className="bg-gray-100 p-8 rounded-lg shadow-lg relative mb-20">
                <h2 className="text-3xl font-bold mb-4">About hwr.link</h2>
                <p>
                    hwr.link is a student-driven project aiming to simplify academic link sharing. Our tool helps in organizing and managing educational resources efficiently.
                </p>
            </section>

            <section className="bg-blue-100 p-8 rounded-lg shadow-lg relative mb-20">
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p>
                    We are committed to enhancing the academic experience by providing a streamlined, easy-to-use link shortening service for students and faculty at HWR.
                </p>
            </section>

            <section className="bg-green-100 p-8 rounded-lg shadow-lg relative">
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <p>
                    Your feedback is crucial for us. Contact us for suggestions, queries, or just to say hi!
                    Email: s_palaoglu22@stud.hwr-berlin.de
                </p>
                {/* Add a contact form or contact details here */}
            </section>
        </div>
    );
};


export default ProjectTeamPage;
