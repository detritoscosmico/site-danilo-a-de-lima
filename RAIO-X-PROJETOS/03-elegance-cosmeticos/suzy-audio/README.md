# Suzy IA — Botão de Áudio na Loja Elegance

## Arquivo principal

`RAIO-X-PROJETOS/03-elegance-cosmeticos/index.html`

## O que foi adicionado

- Botão flutuante: `Conversar com Suzy`
- Painel de atendimento por áudio
- Botão `Falar`
- Botão `Parar`
- Reconhecimento de voz em português do Brasil
- Resposta falada usando voz do navegador
- Filtros automáticos da loja por comando de voz

## Comandos aceitos

Diga frases contendo:

- `maior lucro`
- `lucrativo`
- `masculino`
- `homem`
- `feminino`
- `mulher`
- `presente`
- `combo`
- `maquiagem`
- `cabelo`
- `até 80`
- `barato`
- `Malbec`
- `catálogo`
- `comprar`

## Como funciona

A Suzy usa recursos do próprio navegador:

- `SpeechRecognition` para ouvir o comando
- `speechSynthesis` para responder em voz alta

## Observação

O reconhecimento de voz funciona melhor no Google Chrome. O navegador pode pedir permissão para usar o microfone.

## Próxima evolução

- Colocar número real do WhatsApp
- Criar respostas por produto
- Criar modo atendimento completo
- Criar avatar visual da Suzy
- Salvar perguntas frequentes dos clientes
