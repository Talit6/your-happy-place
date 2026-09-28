import { useState } from "react";
import { ArrowRight, LockKeyhole, PackageCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import kitImage from "@/assets/patafeliz-kit.jpg";

interface PurchaseDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PurchaseDialog({ open, onOpenChange }: PurchaseDialogProps) {
  const [paymentNotice, setPaymentNotice] = useState(false);

  return (
    <Dialog open={open} onOpenChange={(next) => { onOpenChange(next); if (!next) setPaymentNotice(false); }}>
      <DialogContent className="checkout-dialog">
        <DialogHeader className="checkout-heading">
          <span className="eyebrow">SEU PEDIDO</span>
          <DialogTitle className="font-display text-2xl text-foreground">Um dia mais feliz começa aqui.</DialogTitle>
          <DialogDescription>Confira seu kit antes de continuar.</DialogDescription>
        </DialogHeader>
        <div className="checkout-product">
          <img src={kitImage} alt="Itens ilustrativos do Kit PataFeliz" width={1104} height={1104} />
          <div>
            <strong>Kit PataFeliz</strong>
            <p>1 kit • itens de passeio, brincadeira e cuidado</p>
            <b>R$ 149,90</b>
          </div>
        </div>
        <div className="checkout-total"><span>Total ilustrativo</span><strong>R$ 149,90</strong></div>
        <div className="demo-notice"><PackageCheck size={19} /><p>Este é um checkout demonstrativo. Nenhum pedido ou cobrança será realizado.</p></div>
        <Button variant="hero" size="wide" className="w-full" onClick={() => setPaymentNotice(true)}>
          Continuar para pagamento <ArrowRight size={17} />
        </Button>
        {paymentNotice && <p role="status" className="payment-notice">Pagamento indisponível nesta demonstração. A integração de checkout poderá ser conectada futuramente.</p>}
        <p className="checkout-foot"><LockKeyhole size={14} /> Nenhum dado de pagamento é coletado nesta demonstração.</p>
      </DialogContent>
    </Dialog>
  );
}