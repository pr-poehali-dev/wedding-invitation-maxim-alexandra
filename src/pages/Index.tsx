import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

const Index = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("");
  const [attending, setAttending] = useState("yes");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за ответ!",
      description: "Мы получили ваше подтверждение и свяжемся с вами.",
    });
    setName("");
    setGuests("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF7F2] via-[#F5F1E8] to-[#E8E1D5]">
      <section className="min-h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden">
        <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-white/40 animate-shimmer blur-sm" />
        <div className="absolute bottom-20 right-20 w-20 h-20 rounded-full bg-white/30 animate-shimmer blur-sm" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-white/50 animate-shimmer blur-sm" style={{ animationDelay: '2s' }} />
        
        <div className="text-center space-y-6 animate-fade-in z-10">
          <h1 className="font-script text-7xl md:text-9xl text-foreground tracking-wide">
            Максим & Александра
          </h1>
          <div className="flex items-center justify-center gap-4 text-muted-foreground">
            <div className="h-px w-20 bg-primary/30" />
            <p className="text-2xl md:text-3xl font-light tracking-widest">26.04.2026</p>
            <div className="h-px w-20 bg-primary/30" />
          </div>
          <p className="text-lg md:text-xl font-light text-muted-foreground mt-8 tracking-wide">
            Приглашаем вас разделить с нами этот особенный день
          </p>
        </div>
      </section>

      <div className="relative w-full h-24 flex items-center justify-center">
        <svg className="w-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path d="M0,50 Q300,20 600,50 T1200,50" fill="none" stroke="rgba(139,133,126,0.2)" strokeWidth="2" />
        </svg>
        <img 
          src="https://cdn.poehali.dev/projects/91d31cc8-18bd-41ea-aa7c-5e3247d93089/files/1be7482b-efe3-4f51-8e92-2c530b712c7c.jpg" 
          alt="Pearl" 
          className="absolute w-12 h-12 rounded-full object-cover shadow-lg"
        />
      </div>

      <section className="py-20 px-4 max-w-4xl mx-auto animate-fade-in">
        <h2 className="font-script text-5xl md:text-6xl text-center mb-16 text-foreground">
          Программа дня
        </h2>
        <div className="space-y-8">
          {[
            { time: "15:00", title: "Встреча гостей", description: "Приглашаем вас прибыть к началу церемонии" },
            { time: "15:30", title: "Церемония бракосочетания", description: "Торжественная регистрация брака" },
            { time: "16:30", title: "Фуршет и фотосессия", description: "Лёгкие закуски и памятные фотографии" },
            { time: "18:00", title: "Банкет", description: "Праздничный ужин с развлекательной программой" },
            { time: "21:00", title: "Танцы до утра", description: "Веселье продолжается!" }
          ].map((item, index) => (
            <div 
              key={index}
              className="flex items-start gap-6 p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/30 hover:border-primary/50 transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-20 text-center">
                <p className="text-3xl font-light text-primary">{item.time}</p>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="relative w-full h-24 flex items-center justify-center my-12">
        <svg className="w-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path d="M0,50 Q300,80 600,50 T1200,50" fill="none" stroke="rgba(139,133,126,0.2)" strokeWidth="2" />
        </svg>
      </div>

      <section className="py-20 px-4 max-w-4xl mx-auto animate-fade-in">
        <h2 className="font-script text-5xl md:text-6xl text-center mb-8 text-foreground">
          Место проведения
        </h2>
        <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/30">
          <img 
            src="https://cdn.poehali.dev/projects/91d31cc8-18bd-41ea-aa7c-5e3247d93089/files/f47c2318-6864-48e4-b1f8-bc9e22c4bc0f.jpg"
            alt="Venue"
            className="w-full h-64 object-cover rounded-2xl mb-6"
          />
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Icon name="MapPin" className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-1 text-foreground">Банкетный зал «Жемчужина»</h3>
                <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 10</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="Navigation" className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground">
                Удобная транспортная доступность, парковка для гостей
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="relative w-full h-24 flex items-center justify-center my-12">
        <svg className="w-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path d="M0,50 Q300,20 600,50 T1200,50" fill="none" stroke="rgba(139,133,126,0.2)" strokeWidth="2" />
        </svg>
      </div>

      <section className="py-20 px-4 max-w-4xl mx-auto animate-fade-in">
        <h2 className="font-script text-5xl md:text-6xl text-center mb-8 text-foreground">
          Дресс-код
        </h2>
        <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/30">
          <p className="text-center text-lg text-muted-foreground mb-8">
            Мы будем рады видеть вас в нарядах следующих оттенков:
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "Молочный", color: "#FAF7F2" },
              { name: "Бежевый", color: "#E8E1D5" },
              { name: "Нежно-голубой", color: "#D3E4FD" },
              { name: "Чёрный", color: "#1A1F2C" },
              { name: "Нежно-зелёный", color: "#E5F3E5" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div 
                  className="w-20 h-20 rounded-full shadow-lg border-4 border-white"
                  style={{ backgroundColor: item.color }}
                />
                <p className="text-sm font-medium text-foreground">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative w-full h-24 flex items-center justify-center my-12">
        <svg className="w-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path d="M0,50 Q300,80 600,50 T1200,50" fill="none" stroke="rgba(139,133,126,0.2)" strokeWidth="2" />
        </svg>
        <img 
          src="https://cdn.poehali.dev/projects/91d31cc8-18bd-41ea-aa7c-5e3247d93089/files/1be7482b-efe3-4f51-8e92-2c530b712c7c.jpg" 
          alt="Pearl" 
          className="absolute w-12 h-12 rounded-full object-cover shadow-lg"
        />
      </div>

      <section className="py-20 px-4 max-w-2xl mx-auto animate-fade-in">
        <h2 className="font-script text-5xl md:text-6xl text-center mb-8 text-foreground">
          Подтверждение присутствия
        </h2>
        <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/30">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">Ваше имя</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-background/50 border-border/50"
                placeholder="Введите ваше имя"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="guests" className="text-foreground">Количество гостей</Label>
              <Input
                id="guests"
                type="number"
                min="1"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required
                className="bg-background/50 border-border/50"
                placeholder="Сколько человек придёт?"
              />
            </div>

            <div className="space-y-3">
              <Label className="text-foreground">Будете ли вы присутствовать?</Label>
              <RadioGroup value={attending} onValueChange={setAttending}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes" className="font-normal cursor-pointer">
                    Да, с удовольствием!
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no" className="font-normal cursor-pointer">
                    К сожалению, не смогу
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">
                Пожелания или комментарии (необязательно)
              </Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-background/50 border-border/50 min-h-[100px]"
                placeholder="Есть ли у вас особые пожелания?"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 rounded-full text-lg font-medium"
            >
              Отправить подтверждение
            </Button>
          </form>
        </div>
      </section>

      <div className="relative w-full h-24 flex items-center justify-center my-12">
        <svg className="w-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path d="M0,50 Q300,20 600,50 T1200,50" fill="none" stroke="rgba(139,133,126,0.2)" strokeWidth="2" />
        </svg>
      </div>

      <section className="py-20 px-4 max-w-2xl mx-auto text-center animate-fade-in">
        <h2 className="font-script text-5xl md:text-6xl mb-8 text-foreground">
          Контакты
        </h2>
        <div className="space-y-6 bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/30">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">По всем вопросам:</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center justify-center gap-2">
                <Icon name="Phone" className="w-5 h-5 text-primary" />
                <a href="tel:+79001234567" className="hover:text-primary transition-colors">
                  +7 (900) 123-45-67
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Icon name="Mail" className="w-5 h-5 text-primary" />
                <a href="mailto:wedding@example.com" className="hover:text-primary transition-colors">
                  wedding@example.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center">
        <p className="font-script text-3xl text-primary/70">
          С любовью, Максим & Александра
        </p>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="w-3 h-3 rounded-full bg-primary/30 animate-shimmer" />
          <div className="w-3 h-3 rounded-full bg-primary/40 animate-shimmer" style={{ animationDelay: '0.5s' }} />
          <div className="w-3 h-3 rounded-full bg-primary/30 animate-shimmer" style={{ animationDelay: '1s' }} />
        </div>
      </footer>
    </div>
  );
};

export default Index;
