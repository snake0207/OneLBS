// assets
import { QuestionOutlined as DisplayIcon } from "@ant-design/icons";

// icons
const icons = {
  DisplayIcon,
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const examples = {
  id: "examples",
  title: "Example",
  type: "group",
  children: [
    {
      id: "example-create",
      title: "Input Form",
      type: "item",
      url: "/create",
      icon: icons.DisplayIcon,
      breadcrumbs: false,
    },
    {
      id: "example-list",
      title: "Data List",
      type: "item",
      url: "/list",
      icon: icons.DisplayIcon,
      breadcrumbs: false,
    },
    {
      id: "example-update",
      title: "Update Form",
      type: "item",
      url: "/update",
      icon: icons.DisplayIcon,
    },
    {
      id: "example-dialog",
      title: "Dialog",
      type: "item",
      url: "/dialog",
      icon: icons.DisplayIcon,
    },
  ],
};

export default examples;
