
  it('debe crear un jugador correctamente', () => {
     
    cy.visit('https://mariodex-1rnm.onrender.com/');
    cy.get('button').contains('Nuevo Personaje MarioDex').click();
    
    cy.get('input[placeholder="Nombre"]').type('Estrella');
    cy.get('input[placeholder="Tipo del personaje"]').type('Aliado');
    cy.get('input[placeholder="nivel"]').type(6);
    cy.get('input').contains('Agregar Personaje').click();

    cy.on('window:alert',(t)=>{
    expect(t).to.contains('éxito');
  });
  });