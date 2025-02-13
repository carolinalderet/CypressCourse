
                                        describe('Grupo de Pruebas', function(){
                                            beforeEach(()=>{
                                            })
                                            it('Prueba 1',function(){
                                            })
                                            })
                                            beforeEach(()=>{
                                                cy.fixture('PruebaFixtures.json').as('userData')
                                                })
                                                it('Prueba 1',function(){
                                                    cy.get('@userData').then((userData)=>{
                                                    cy.visit(userData.url);
                                                    cy.get('#woocommerce-product-search-field-0').type(userData.producto);
                                                    cy.get('#woocommerce-product-search-field-0').type('{enter}'cy.screenshot)
                                                    }
                                                    )
                                                    })
                                                    describe('Grupo de Pruebas', function(){
                                                        beforeEach(()=>{
                                                        cy.fixture('example.json').as('userData')
                                                        })
                                                        it('Prueba 1',function(){
                                                        cy.get('@userData').then((userData)=>{
                                                        cy.login(userData.correo)
                                                        cy.screenshot();
                                        
                                                        }
                                                        )
                                                        })
                                                        })
                                                        cy.xpath
                                                        it('Click on Icon using Xpath', () => {
                                                            cy.xpath("//*[@class='icon']").click();
                                                        });
                                                        describe('Pruebas de api con cypress', ()=>{
                                                            it('Petición HTTP Get con validación de property en el Body',()=>{
                                                            cy.request('GET', 'https://reqres.in/api/users?page=2').its('body').should('have.property', 'page', 2);
                                                            })
                                                            })

                                                            describe('Prueba de API con Cypress', () => {
                                                                it('Petición HTTP Post con validación de property en el Body', () => {
                                                                    cy.request('POST', 'https://reqres.in/api/users', {
                                                                        name: "Matias",
                                                                        job: "QA"
                                                                    }).then((response) => {
                                                                        // Validaciones
                                                                        expect(response.status).to.eq(201);
                                                                        expect(response.body).to.have.property('name', 'Matias');
                                                                        expect(response.body).to.have.property('job', 'QA');

                                                                    });
                                                                });
                                                            });
                                                            

            
                                                        
                                                   