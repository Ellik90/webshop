import { Box, Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import TableMUI from "../components/TableMUIComponent";
import { Product } from "../../data/index";
import { useProductContext } from "../contexts/ProductContext";

export default function AdminPage() {
  const navigate = useNavigate();
  const { allProducts, removeProduct } = useProductContext();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  function handleAction(product: Product) {
    setSelectedProduct(product);
    setIsPopupOpen(true);
  }

  function handleRemoveProduct(product: Product) {
    removeProduct(product);
    setIsPopupOpen(false);
  }

  const titleRows = ["Produkt", "Id", "Titel", "Pris", "Radera", "Redigera "];

  const productRows = allProducts.map((p) => [
    {
      property: <img src={p.image} alt="Product" width="20" height="20" />,
      datacyCell: "",
    },
    { property: p.id, datacyCell: "" },
    { property: p.title, datacyCell: "" },
    { property: p.price, datacyCell: "" },
    {
      property: (
        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            fontSize: "10px",
            "&:hover": {
              backgroundColor: "grey",
            },
          }}
          onClick={() => handleAction(p)}
        >
          Radera
        </Button>
      ),
      datacyCell: "",
    },
    {
      property: (
        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            fontSize: "10px",
            "&:hover": {
              backgroundColor: "grey",
            },
          }}
          onClick={() => navigate(`/admin/product/${p.id}`)}
        >
          Redigera
        </Button>
      ),
      datacyCell: "",
    },
  ]);

  return (
    <Box display={"flex"} flex={1} flexDirection={"column"}>
      <Box my={2}>
        <NavLink to="/admin/product/ny" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#009688",
              "&:hover": {
                backgroundColor: "#00695c",
              },
            }}
          >
            Lägg till produkt
          </Button>
        </NavLink>
      </Box>

      <TableMUI titleRow={titleRows} cellRows={productRows} />

      <Dialog open={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <DialogTitle>Product Details</DialogTitle>
        <DialogContent sx={{ display: "flex" }}>
          {selectedProduct && (
            <Box>
              <p>ID: {selectedProduct.id}</p>
              <p>Title: {selectedProduct.title}</p>
              <p>Description: {selectedProduct.description}</p>
              <p>Price: {selectedProduct.price}</p>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleRemoveProduct(selectedProduct)}
              >
                Ta bort
              </Button>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}

