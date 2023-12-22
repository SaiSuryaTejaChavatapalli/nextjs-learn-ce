import { Metadata } from "next";
// metadata from next is for better intellisense.
// title:{
// default:"" //Fallback for children pages
// template:'% | Cod evolution' //Template for children, not apply for current page
// absolute:"" //Child to override parent's template
// }
export const metadata: Metadata = {
  title: {
    absolute: "About Page",
  },
};

const AboutPage = () => {
  return <div>AboutPage</div>;
};

export default AboutPage;
