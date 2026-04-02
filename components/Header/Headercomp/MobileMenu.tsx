import { motion } from "framer-motion";
import { Link } from "react-scroll";

const navItems = [
  { id: "aboutSection", label: "About", number: "01", offset: -70 },
  { id: "WhereIhaveWorkedSection", label: "Experience", number: "02", offset: -220 },
  { id: "ProductsSection", label: "Products", number: "03", offset: -70 },
  { id: "SomethingIveBuiltSection", label: "Case Studies", number: "04", offset: -70 },
  { id: "GetInTouchSection", label: "Contact", number: "05", offset: -70 },
];

const MobileMenu = props => {
  const closeMenu = () => {
    props.setRotate(!props.rotate);
    props.setShowElement(!props.ShowElement);
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={props.rotate ? { x: "0" } : { x: "100%" }}
      transition={{ x: { duration: 0.35 } }}
      className="fixed inset-0 z-20 flex lg:hidden"
    >
      <div onClick={() => closeMenu()} className="h-full flex-1 bg-[#10192f]/[0.55] backdrop-blur-sm" />

      <div className="relative h-full w-[82%] max-w-sm overflow-hidden rounded-l-[36px] border-l border-white/[0.12] bg-[#182441]/95 px-6 pb-10 pt-24">
        <div className="absolute left-4 top-4 rotate-[-6deg] rounded-full border border-white/[0.12] bg-white/10 px-4 py-2 font-Hand text-xl text-[#fff8e7]">
          menu board
        </div>
        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#85e7dc]/[0.18] blur-3xl" />
        <div className="absolute bottom-4 left-0 h-32 w-32 rounded-full bg-[#ffcf6e]/[0.14] blur-3xl" />

        <div className="relative flex h-full flex-col">
          <div className="mb-8">
            <div className="font-Header text-3xl text-[#fff8e7]">Navigate</div>
            <p className="mt-2 text-sm leading-6 text-[#d0d8ee]">
              Jump straight to the sections recruiters usually care about first.
            </p>
          </div>

          <div className="flex flex-1 flex-col gap-4">
            {navItems.map(item => (
              <Link
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={item.offset}
                duration={220}
                onClick={() => closeMenu()}
                className="group flex cursor-pointer items-center gap-3 rounded-[24px] border border-white/10 bg-white/[0.08] px-4 py-4"
              >
                <span className="rounded-full border border-AAsecondary/[0.35] bg-AAsecondary/[0.12] px-3 py-2 font-Mono text-[10px] uppercase tracking-[0.2em] text-AAsecondary transition duration-300 group-hover:rotate-[-6deg]">
                  {item.number}
                </span>
                <div>
                  <div className="font-Header text-lg text-[#fff8e7]">{item.label}</div>
                  <div className="font-Hand text-base leading-none text-[#b7c4ea]">tap to scroll</div>
                </div>
              </Link>
            ))}
          </div>

          <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer" className="mt-8">
            <button className="w-full rounded-full border border-AAsecondary/60 bg-AAsecondary px-6 py-4 font-Header text-sm font-bold uppercase tracking-[0.16em] text-[#17223f] shadow-[0_16px_28px_rgba(11,18,40,0.22)]">
              Open Resume
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
