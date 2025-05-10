import { Contrast, Palette, Zap } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';

const items = [
  {
    title: 'Is it accessible?',
    content: 'Yes. It adheres to the WAI-ARIA design pattern.',
    icon: Contrast,
  },
  {
    title: 'Is it styled?',
    content:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
    icon: Palette,
  },
  {
    title: 'Is it animated?',
    content:
      "Yes. It's animated by default, but you can disable it if you prefer.",
    icon: Zap,
  },
];

export function Faq() {
  return (
    <Accordion
      defaultValue='item-0'
      type='single'
      collapsible
      className='my-4 sm:w-[80%] w-full font-roboto'
    >
      {items.map(({ title, content, icon: Icon }, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>
            <div className='flex items-start gap-3'>
              <Icon className="h-5 w-5" />
              <span className="font-medium">{title}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="font-light text-muted-foreground">{content}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
