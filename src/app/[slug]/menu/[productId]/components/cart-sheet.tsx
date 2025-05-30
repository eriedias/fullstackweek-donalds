import { useContext, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { formatCurrency } from "@/helpers/format-currency";

import CartProductItem from "../../components/cart-product-item";
import FinishiOrderDialog from "../../components/finishi-order-dialog";
import { CartContext } from "../../context/cart";

const CartSheet = () => {
    const [finishiOrderDialogIsOpen, setFinishiOrderDialogIsOpen] = useState(false);
    const {isOpen, toggleCart, products, total } = useContext(CartContext)
    return (
        <Sheet open={isOpen} onOpenChange={toggleCart}>
            <SheetContent className="w-[80%]">
                <SheetHeader>
                <SheetTitle className="text-left">Sacola</SheetTitle>
                </SheetHeader>
                <div className="py-5 flex h-full flex-col">
                    <div className="flex-auto">
                        {products.map((product) => (
                            <CartProductItem key={product.id} product={product} />
                        ))}
                    </div>
                    <Card className="mb-6">
                        <CardContent className="p-5">
                            <div className="flex justify-between">
                                <p className="text-sm text-muted-foreground">Total</p>
                                <p className="font-semibold text-sm">{formatCurrency(total)}</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Button 
                        className="w-full rounded-full" 
                        onClick={() => setFinishiOrderDialogIsOpen(true)}
                    >
                        Finalizar pedido
                    </Button>
                    <FinishiOrderDialog open={finishiOrderDialogIsOpen} onOpenChange={setFinishiOrderDialogIsOpen} />
                </div>
            </SheetContent>
        </Sheet>
    );
}
 
export default CartSheet;