import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const questions = [
  { question: "O que vem no Kit PataFeliz?", answer: "Nesta apresentação, o kit ilustrativo reúne uma guia para passeios, um brinquedo interativo, uma bolsinha para petiscos e uma escova de cuidados. A composição final deverá ser confirmada antes de uma venda real." },
  { question: "O kit é para cães e gatos?", answer: "A proposta foi pensada para momentos de cuidado com pets, mas os itens ilustrados podem não ser apropriados para todos os animais. Antes de usar qualquer produto real, confira porte, material e recomendações específicas." },
  { question: "Como funciona o frete e a entrega?", answer: "Esta é uma página demonstrativa. Ainda não há cálculo de frete, prazo de entrega ou envio de pedidos. Essas informações deverão ser configuradas antes de iniciar as vendas." },
  { question: "Posso pagar por aqui?", answer: "Ainda não. O checkout mostra como seria a experiência de compra, mas não processa pagamentos nem coleta dados financeiros." },
  { question: "E se eu tiver alguma dúvida?", answer: "As informações comerciais e os canais de atendimento reais poderão ser adicionados quando a loja estiver pronta para operar." },
];

export function FaqSection() {
  return <section id="faq" className="faq-section section-pad">
    <div className="container-shell faq-grid">
      <div>
        <p className="eyebrow">PERGUNTAS FREQUENTES</p>
        <h2 className="section-title">Dúvidas? A gente<br /><em>te ajuda.</em></h2>
        <p className="section-copy">Tudo o que você precisa saber sobre esta demonstração.</p>
      </div>
      <Accordion type="single" collapsible className="faq-list">
        {questions.map(({ question, answer }) => <AccordionItem value={question} key={question} className="faq-item">
          <AccordionTrigger className="faq-trigger">{question}</AccordionTrigger>
          <AccordionContent className="faq-answer">{answer}</AccordionContent>
        </AccordionItem>)}
      </Accordion>
    </div>
  </section>;
}