// component
import SvgColor from "../../../components/svg-color";

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const navConfig = [
  {
    title: "dashboard",
    path: "/dashboard/app",
    icon: icon("ic_analytics"),
  },
  {
    title: "product categories",
    path: "/dashboard/categories",
    icon: icon("ic_product"),
  },
  {
    title: "sub categories",
    path: "/dashboard/sub_categories",
    icon: icon("ic_sub"),
  },
  {
    title: "product",
    path: "/dashboard/products",
    icon: icon("ic_cart"),
  },
  {
    title: "brand",
    path: "/dashboard/brand",
    icon: icon("ic_brand"),
  },
  {
    title: "purchase",
    path: "/dashboard/purchese",
    icon: icon("ic_purchese"),
  },
  {
    title: "return",
    path: "/dashboard/return",
    icon: icon("ic_return"),
  },
  {
    title: "login",
    path: "/login",
    icon: icon("ic_lock"),
  },
  {
    title: "Not found",
    path: "/404",
    icon: icon("ic_disabled"),
  },
];

export default navConfig;
