import FooterList from "../FooterList/FooterList"
import SpanText from "../SpanText/SpanText"
import "./Footer.css"
const Footer = () => {
  return (
    <footer className="footer container-fluid">
        <div className="Lists d-flex flex-lg-row flex-column justify-content-center align-items-center">
            <FooterList ListTitle="Digital Agency" items={[
                {
                    itemTitle :"Building digital products, brands & experience"
                }
            ]}
            />
        <FooterList ListTitle="Resources" items={[
                {
                    itemTitle :"Guides"
                },
                {
                    itemTitle: "Blog"
                },
                {
                    itemTitle:"Customer Stories"
                },
                {
                    itemTitle: "Glossery"
                }
            ]}
            />
                    <FooterList ListTitle="Company" items={[
                {
                    itemTitle :"About Us"
                },
                {
                    itemTitle: "Careers"
                },
                {
                    itemTitle:"Partners"
                },
                {
                    itemTitle: "Contact Us"
                }
            ]}
            />
            <FooterList ListTitle="Social Media" items={[
                {
                    itemTitle :"LinkedIn"
                },
                {
                    itemTitle: "Facebook"
                },
                {
                    itemTitle:"Instagram"
                },
                {
                    itemTitle: "Twitter"
                }
            ]}
            />
            </div>
      <SpanText text="© Matheus. Todos os direitos reservados"/>
    </footer>
  )
}

export default Footer
