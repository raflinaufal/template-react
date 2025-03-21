import { MoreVertical } from "react-feather";
import { Image } from "../../../AbstractElements";
import { dynamicImage } from "../../../Service";
import { Href } from "../../../utils/Constant";
import { OrderHistoryImageType, OrderHistoryTableColumns } from "../../../Types/Application/Ecommerce/OrderHistory";
import { TableColumn } from "react-data-table-component";
import { Link } from "react-router-dom";

export const orderData = [
    {
      id: 1,
      name: "Women Top",
      image: "product-table-6.png",
    },
    {
      id: 2,
      name: "Women Shorts",
      image: "product-table-5.png",
    },
    {
      id: 3,
      name: "Cyclamen",
      image: "product-table-4.png",
    },
    {
      id: 4,
      name: "Men dashed Denim jacket",
      image: "product-table-3.png",
    },
    {
      id: 5,
      name: "Blue shirt",
      image: "product-table-2.png",
    },
    {
      id: 6,
      name: "Red shirt",
      image: "product-table-1.png",
    },
    {
      id: 7,
      name: "Red shirt",
      image: "product-table-1.png",
    },
    {
      id: 8,
      name: "Women Top",
      image: "product-table-6.png",
    },
    {
      id: 9,
      name: "Women Shorts",
      image: "product-table-5.png",
    },
  ];

  export const orderHistoryData = [
    {
      image: "15.png",
      productName:"Ladies side bag",
      tag:"Processing",
      size: "M",
      color: "Black",
      articleNumber: 5748214,
      units: 1,
      price: "$25",
      icon: <MoreVertical />,
    },
    {
      image: "3.png",
      productName:"Fancy Ladies Jacket",
      tag:"Shipped",
      size: "XL",
      color: "Light gray",
      articleNumber: 3581714,
      units: 1,
      price: "$24",
      icon: <MoreVertical />,
    },
    {
      image: "1.png",
      productName:"Long Top",
      tag:"Processing",
      size: "M",
      color: "Lavender",
      articleNumber: 4215738,
      units: 1,
      price: "$21",
      icon: <MoreVertical />,
    },
  
    {
      image: "4.png",
      productName:"Man shoes",
      tag:"Processing",
      size: "8",
      color: "Black & white",
      articleNumber: 1756457,
      units: 1,
      price: "$18",
      icon: <MoreVertical />,
    },
  
    {
      image: "2.png",
      productName:"Ladies Handbag",
      tag:"Shipped",
      size: "25cm x 20cm",
      color: "Black",
      articleNumber: 6748142,
      units: 1,
      price: "$14",
      icon: <MoreVertical />,
    },
    {
      image: "10.png",
      productName:"Ladies side bag",
      tag:"Shipped",
      size: "22cm x 18cm",
      color: "Brown",
      articleNumber: 7451725,
      units: 1,
      price: "$13",
      icon: <MoreVertical />,
    },
    {
      image: "14.png",
      productName:"Watch",
      tag:"Cancelled",
      size: "27mm",
      color: "Brown",
      articleNumber: 2471254,
      units: 1,
      price: "$12",
      icon: <MoreVertical />,
    },
    {
      image: "13.png",
      productName:"Fancy watch",
      tag:"Processing",
      size: "35mm",
      color: "Blue",
      articleNumber: 5476182,
      units: 1,
      price: "$10",
      icon: <MoreVertical />,
    },
    {
      image: "11.png",
      productName:"Slipper",
      tag:"Cancelled",
      size: "6",
      color: "Blue",
      articleNumber: 8475112,
      units: 1,
      price: "$6",
      icon: <MoreVertical />,
    },
    {
      image: "12.png",
      productName:"Ladies Slipper",
      tag:"Shipped",
      size: "6",
      color: "Brown & white",
      articleNumber: 4127421,
      units: 1,
      price: "$6",
      icon: <MoreVertical />,
    },
  ];
  

  const OrderHistoryImage :React.FC<OrderHistoryImageType> = ({ name }) => {
    return <Image className="img-fluid img-30 m-3" src={dynamicImage(`product/${name}`)} alt="#" />;
  };
  
  const OrderDataHistory :React.FC<OrderHistoryImageType> = ({ name, tag }) => {
    return (
      <div className="product-name d-flex flex-column align-items-center">
        <Link to={Href}>{name}</Link>
        <div className="order-process">
          <span className="order-process-circle"></span>{tag}
        </div>
      </div>
    );
  };

  export const orderHistoryDataColumn: TableColumn<OrderHistoryTableColumns>[] = [
    {
      name: "Product",
      cell: (row) => <OrderHistoryImage name={row.image} />,
      center: true,
    },
    {
      name: "Product Name",
      cell: (row) => <OrderDataHistory name={row.productName} tag={row.tag} />,
      sortable: true,
      center: true,
    },
    {
      name: "Sizes",
      selector: (row) => `${row.size}`,
      sortable: true,
      center: true,
    },
    {
      name: "Color",
      selector: (row) => `${row.color}`,
      sortable: true,
      center: true,
    },
    {
      name: "Article Number",
      selector: (row) => row["articleNumber"],
      sortable: true,
      center: true,
    },
    {
      name: "Units",
      selector: (row) => row["units"],
      center: true,
    },
    {
      name: "Price",
      selector: (row) => row["price"],
      sortable: true,
      center: true,
    },
    {
      name: <MoreVertical />,
      cell: (row) => row["icon"],
      center: true,
    },
  ];