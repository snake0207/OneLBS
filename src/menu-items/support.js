// assets
import {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
} from "@ant-design/icons";

// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: "guide",
  title: "Guide",
  type: "group",
  children: [
    {
      id: "guide-typography",
      title: "Typography",
      type: "item",
      url: "/typo",
      icon: icons.FontSizeOutlined,
    },
    {
      id: "guide-color",
      title: "Color",
      type: "item",
      url: "/color",
      icon: icons.BgColorsOutlined,
    },
    {
      id: "guide-shadow",
      title: "Shadow",
      type: "item",
      url: "/shadow",
      icon: icons.BarcodeOutlined,
    },
    {
      id: "ant-icons",
      title: "Ant Icons",
      type: "item",
      url: "/icons/ant",
      icon: icons.AntDesignOutlined,
      breadcrumbs: false,
    },
  ],
};

export default support;
