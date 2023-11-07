import Component, { frontmatter } from "../content/blah.mdx";

export default function About() {
  return (
    <>
      <h1 className="text-red-500">frontmatter.title: {frontmatter.title}</h1>
      <Component />
      <p className="text-green-500">test</p>
    </>
  );
}
