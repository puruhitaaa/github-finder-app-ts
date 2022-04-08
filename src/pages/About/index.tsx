const About = () => {
  return (
    <>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        Made with TypeScript React, Tailwind CSS, and Daisy UI by me:{' '}
        <strong>
          <a href="https://www.github.com/puruhitaaa">Baiq</a>
        </strong>
      </p>
      <p className="text-lg text-gray-400">
        <a href="https://www.github.com/puruhitaaa/github-finder-ts">
          Version <span className="text-white">1.0.0</span>
        </a>
      </p>
    </>
  );
};

export default About;
