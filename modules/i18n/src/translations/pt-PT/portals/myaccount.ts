/**
 * Copyright (c) 2024, WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { MyAccountNS } from "../../../models";

/**
 * NOTES: No need to care about the max-len for this file since it's easier to
 * translate the strings to other languages easily with editor translation tools.
 */
/* eslint-disable max-len */
export const myAccount: MyAccountNS = {
    components: {
        accountRecovery: {
            SMSRecovery: {
                descriptions: {
                    add: "Adicione ou atualize o número de celular de recuperação.",
                    emptyMobile: "Você precisa configurar seu número de celular para prosseguir com a recuperação via SMS-OTP.",
                    update: "Atualize o número de celular de recuperação ({{mobile}})",
                    view: "Visualize o número de celular de recuperação ({{mobile}})"
                },
                forms: {
                    mobileResetForm: {
                        inputs: {
                            mobile: {
                                label: "Número de celular",
                                placeholder: "Digite o número de celular de recuperação.",
                                validations: {
                                    empty: "Digite um número de celular.",
                                    invalidFormat: "O número de celular não está no formato correto."
                                }
                            }
                        }
                    }
                },
                heading: "Recuperação via SMS",
                notifications: {
                    updateMobile: {
                        error: {
                            description: "{{description}}",
                            message: "Erro ao atualizar o número de celular de recuperação."
                        },
                        genericError: {
                            description: "Ocorreu um erro ao atualizar o número de celular de recuperação",
                            message: "Algo deu errado"
                        },
                        success: {
                            description: "O número de celular no perfil do usuário foi atualizado com sucesso",
                            message: "Número de celular atualizado com sucesso"
                        }
                    }
                }
            },
            codeRecovery: {
                descriptions: {
                    add: "Adicionar ou atualizar opções de recuperação de código"
                },
                heading: "Recuperação de código"
            },
            emailRecovery: {
                descriptions: {
                    add: "Adicionar um endereço de email de recuperação",
                    emptyEmail: "Você precisa configurar seu endereço de e-mail para prosseguir com a recuperação de e-mail.",
                    update: "Atualizar endereço de email de recuperação ({{email}})",
                    view: "Ver endereço de e-mail de recuperação ({{email}})"
                },
                forms: {
                    emailResetForm: {
                        inputs: {
                            email: {
                                label: "Endereço de e-mail",
                                placeholder: "Digite o endereço de e-mail de recuperação",
                                validations: {
                                    empty: "Digite um endereço de email",
                                    invalidFormat: "O endereço de email não está no formato correto"
                                }
                            }
                        }
                    }
                },
                heading: "Recuperação de Email",
                notifications: {
                    updateEmail: {
                        error: {
                            description: "{{description}}",
                            message: "Erro ao atualizar o email de recuperação"
                        },
                        genericError: {
                            description: "Ocorreu um erro ao atualizar o email de recuperação",
                            message: "Algo deu errado"
                        },
                        success: {
                            description: "O endereço de email no perfil do usuário foi atualizado com sucesso",
                            message: "Endereço de email atualizado com sucesso"
                        }
                    }
                }
            },
            preference: {
                notifications: {
                    error: {
                        description: "{{description}}",
                        message: "Erro ao obter a preferência de recuperação"
                    },
                    genericError: {
                        description: "Ocorreu um erro ao obter a preferência de recuperação",
                        message: "Algo deu errado"
                    },
                    success: {
                        description: "A preferência de recuperação foi recuperada com sucesso",
                        message: "Recuperação de preferência de recuperação bem-sucedida"
                    }
                }
            },
            questionRecovery: {
                descriptions: {
                    add: "Adicionar e atualizar perguntas de desafio de recuperação de conta"
                },
                forms: {
                    securityQuestionsForm: {
                        inputs: {
                            answer: {
                                label: "Responda",
                                placeholder: "Digite sua resposta",
                                validations: {
                                    empty: "A resposta é um campo obrigatório"
                                }
                            },
                            question: {
                                label: "Pergunta, questão",
                                placeholder: "Selecione uma pergunta de segurança",
                                validations: {
                                    empty: "Pelo menos uma pergunta de segurança deve ser selecionada"
                                }
                            }
                        }
                    }
                },
                heading: "Questões de segurança",
                notifications: {
                    addQuestions: {
                        error: {
                            description: "{{description}}",
                            message: "Ocorreu um erro ao adicionar as perguntas de segurança"
                        },
                        genericError: {
                            description: "Ocorreu um erro ao adicionar as perguntas de segurança",
                            message: "Algo deu errado"
                        },
                        success: {
                            description: "As perguntas de segurança necessárias foram adicionadas com sucesso",
                            message: "Perguntas de segurança foram adicionadas com sucesso"
                        }
                    },
                    updateQuestions: {
                        error: {
                            description: "{{description}}",
                            message: "Erro ao atualizar as perguntas de segurança"
                        },
                        genericError: {
                            description: "Ocorreu um erro ao atualizar as perguntas de segurança",
                            message: "Algo deu errado"
                        },
                        success: {
                            description: "As perguntas de segurança necessárias foram atualizadas com sucesso",
                            message: "As perguntas de segurança foram atualizadas com sucesso"
                        }
                    }
                }
            }
        },
        advancedSearch: {
            form: {
                inputs: {
                    filterAttribute: {
                        label: "Atributo de filtro",
                        placeholder: "ex: nome, descrição etc.",
                        validations: {
                            empty: "O atributo de filtro é um campo obrigatório"
                        }
                    },
                    filterCondition: {
                        label: "Condição do filtro",
                        placeholder: "ex: começa com etc.",
                        validations: {
                            empty: "A condição do filtro é um campo obrigatório"
                        }
                    },
                    filterValue: {
                        label: "Valor do filtro",
                        placeholder: "Insira o valor para pesquisar",
                        validations: {
                            empty: "O valor do filtro é um campo obrigatório"
                        }
                    }
                }
            },
            hints: {
                querySearch: {
                    actionKeys: "Shift + Enter",
                    label: "Para pesquisar como uma consulta"
                }
            },
            options: {
                header: "Busca Avançada"
            },
            placeholder: "Procura por nome",
            popups: {
                clear: "pesquisa clara",
                dropdown: "mostrar opções"
            },
            resultsIndicator: "Mostrando resultados para \"{{query}}\""
        },
        applications: {
            advancedSearch: {
                form: {
                    inputs: {
                        filterAttribute: {
                            placeholder: "ex: nome, descrição etc."
                        },
                        filterCondition: {
                            placeholder: "ex: começa com etc."
                        },
                        filterValue: {
                            placeholder: "ex: Zoom, Salesforce etc."
                        }
                    }
                },
                placeholder: "Procura por nome"
            },
            all: {
                heading: "Todas as aplicações"
            },
            favourite: {
                heading: "Favoritas"
            },
            notifications: {
                fetchApplications: {
                    error: {
                        description: "{{description}}",
                        message: "Erro ao recuperar aplicativos"
                    },
                    genericError: {
                        description: "Não foi possível recuperar aplicativos",
                        message: "Algo deu errado"
                    },
                    success: {
                        description: "Os aplicativos foram recuperados com sucesso.",
                        message: "Recuperação de aplicativos bem-sucedida"
                    }
                }
            },
            placeholders: {
                emptyList: {
                    action: "Atualizar lista",
                    subtitles: {
                        0: "A lista de aplicativos retornou vazia.",
                        1: "Isso pode ser devido a não ter aplicativos detectáveis.",
                        2: "Peça a um administrador para ativar a capacidade de descoberta de aplicativos."
                    },
                    title: "Sem aplicações"
                }
            },
            recent: {
                heading: "Aplicações recentes"
            }
        },
        changePassword: {
            forms: {
                passwordResetForm: {
                    inputs: {
                        confirmPassword: {
                            label: "Confirme a Senha",
                            placeholder: "Digite a nova senha",
                            validations: {
                                empty: "Confirmar senha é um campo obrigatório",
                                mismatch: "A confirmação da senha não corresponde"
                            }
                        },
                        currentPassword: {
                            label: "Senha atual",
                            placeholder: "Digite a senha atual",
                            validations: {
                                empty: "A senha atual é um campo obrigatório",
                                invalid: "A senha atual é inválida"
                            }
                        },
                        newPassword: {
                            label: "Nova senha",
                            placeholder: "Digite a nova senha",
                            validations: {
                                empty: "Nova senha é um campo obrigatório"
                            }
                        }
                    },
                    validations: {
                        genericError: {
                            description: "Algo deu errado. Por favor, tente novamente",
                            message: "Alterar erro de senha"
                        },
                        invalidCurrentPassword: {
                            description: "A senha atual que você digitou parece ser inválida. Por favor, tente " +
                                "novamente",
                            message: "Alterar erro de senha"
                        },
                        invalidNewPassword: {
                            description: "A senha não atende às restrições exigidas.",
                            message: "Senha inválida"
                        },
                        passwordCaseRequirement: "Pelo menos {{minUpperCase}} maiúsculas e {{minLowerCase}} " +
                            "letras minúsculas",
                        passwordCharRequirement: "Pelo menos {{minSpecialChr}} de caracteres especiais",
                        passwordLengthRequirement: "Deve ter entre {{min}} e {{max}} caracteres",
                        passwordLowerCaseRequirement: "Pelo menos {{minLowerCase}} letra(s) minúscula(s)",
                        passwordNumRequirement: "Pelo menos {{min}} número(s)",
                        passwordRepeatedChrRequirement: "Não mais que {{repeatedChr}} caracter(es) repetido(s)",
                        passwordUniqueChrRequirement: "Pelo menos {{uniqueChr}} caractere(s) exclusivo(s)",
                        passwordUpperCaseRequirement: "Pelo menos {{minUpperCase}} letra(s) maiúscula(s)",
                        submitError: {
                            description: "{{description}}",
                            message: "Alterar erro de senha"
                        },
                        submitSuccess: {
                            description: "A senha foi alterada com sucesso",
                            message: "Redefinição de senha bem-sucedida"
                        },
                        validationConfig: {
                            error: {
                                description: "{{description}}",
                                message: "Erro de recuperação"
                            },
                            genericError: {
                                description: "Não foi possível recuperar os dados de configuração de validação.",
                                message: "algo deu errado"
                            }
                        }
                    }
                }
            },
            modals: {
                confirmationModal: {
                    heading: "Confirmação",
                    message: "A alteração da senha resultará no encerramento da sessão atual. Você precisará fazer " +
                        "o login com a senha recém-alterada. Você deseja continuar?"
                }
            }
        },
        consentManagement: {
            editConsent: {
                collectionMethod: "Método de Coleta",
                dangerZones: {
                    revoke: {
                        actionTitle: "Revogar",
                        header: "Revogar consentimento",
                        subheader: "Você precisará fornecer o consentimento para este aplicativo novamente."
                    }
                },
                description: "Descrição",
                piiCategoryHeading: "Gerencie o consentimento para a coleta e o compartilhamento de suas informações " +
                    "pessoais com o aplicativo. Desmarque os atributos que você precisa revogar e pressione o botão " +
                    "atualizar para salvar as alterações ou pressione o botão revogar para remover o consentimento " +
                    "para todos os atributos.",
                state: "Estado",
                version: "Versão"
            },
            modals: {
                consentRevokeModal: {
                    heading: "Você tem certeza?",
                    message: "Esta operação não é reversível. Isso revogará permanentemente o consentimento para " +
                        "todos os atributos. Tem certeza de que deseja continuar?",
                    warning: "Observe que você será redirecionado para a página de consentimento de login"
                }
            },
            notifications: {
                consentReceiptFetch: {
                    error: {
                        description: "{{description}}",
                        message: "Algo deu errado"
                    },
                    genericError: {
                        description: "Não foi possível carregar as informações no aplicativo selecionado",
                        message: "Something went wrong"
                    },
                    success: {
                        description: "Recuperado com sucesso o recibo de consentimento",
                        message: "Recuperação bem sucedida"
                    }
                },
                consentedAppsFetch: {
                    error: {
                        description: "{{description}}",
                        message: "Algo deu errado"
                    },
                    genericError: {
                        description: "Não foi possível carregar a lista de aplicativos consentidos",
                        message: "Algo deu errado"
                    },
                    success: {
                        description: "Recuperada com sucesso a lista de aplicativos consentidos",
                        message: "Recuperação bem sucedida"
                    }
                },
                revokeConsentedApp: {
                    error: {
                        description: "{{description}}",
                        message: "Erro de revogação de consentimento"
                    },
                    genericError: {
                        description: "Não foi possível revogar o consentimento para o aplicativo",
                        message: "Algo deu errado"
                    },
                    success: {
                        description: "O consentimento foi revogado com sucesso para o aplicativo",
                        message: "O consentimento revoga o sucesso"
                    }
                },
                updateConsentedClaims: {
                    error: {
                        description: "{{description}}",
                        message: "Algo deu errado"
                    },
                    genericError: {
                        description: "As reivindicações consentidas falharam ao atualizar para o aplicativo",
                        message: "Algo deu errado"
                    },
                    success: {
                        description: "As reivindicações consentidas foram atualizadas com sucesso para o aplicativo",
                        message: "Reivindicações consentidas atualizadas com sucesso"
                    }
                }
            }
        },
        cookieConsent: {
            confirmButton: "Entendi",
            content: "Usamos cookies para garantir que você obtenha a melhor experiência geral. Esses cookies " +
                "são usados ​​para manter uma sessão contínua ininterrupta ao mesmo tempo em que oferece serviços " +
                "personalizados e fluidos. Para saiba mais sobre como usamos cookies, consulte nossa " +
                "<1>Política de Cookies</1>."
        },
        federatedAssociations: {
            deleteConfirmation: "Isso removerá esse login externo da sua conta. Deseja continuar removendo?",
            notifications: {
                getFederatedAssociations: {
                    error: {
                        description: "{{description}}",
                        message: "Algo deu errado"
                    },
                    genericError: {
                        description: "Não foi possível recuperar logons externos",
                        message: "Algo deu errado"
                    },
                    success: {
                        description: "Logins externos foram recuperados com sucesso",
                        message: "Logins externos recuperados com sucesso"
                    }
                },
                removeAllFederatedAssociations: {
                    error: {
                        description: "{{description}}",
                        message: "Algo deu errado"
                    },
                    genericError: {
                        description: "Federated Associations couldn't be removed",
                        message: "Algo deu errado"
                    },
                    success: {
                        description: "Todos os logins externos foram removidos com sucesso",
                        message: "Logins externos removidos com sucesso"
                    }
                },
                removeFederatedAssociation: {
                    error: {
                        description: "{{description}}",
                        message: "Algo deu errado"
                    },
                    genericError: {
                        description: "Não foi possível remover o logon externo",
                        message: "Algo deu errado"
                    },
                    success: {
                        description: "O logon externo foi removido com sucesso",
                        message: "O logon externo removido com sucesso"
                    }
                }
            }
        },
        footer: {
            copyright: "Servidor de Identidade WSO2 © {{year}}"
        },
        header: {
            appSwitch: {
                console: {
                    description: "Gerenciar como desenvolvedores ou administradores",
                    name: "Console"
                },
                myAccount: {
                    description: "Gerenciar sua própria conta",
                    name: "My Account"
                },
                tooltip: "Apps"
            },
            dropdown: {
                footer: {
                    cookiePolicy: "Cookies",
                    privacyPolicy: "Privacidade",
                    termsOfService: "Termos"
                }
            },
            organizationLabel: "Esta conta é gerenciada por"
        },
        linkedAccounts: {
            accountTypes: {
                local: {
                    label: "Adicionar conta de usuário local"
                }
            },
            deleteConfirmation: "Isso removerá a conta vinculada da sua conta. Deseja continuar removendo?",
            forms: {
                addAccountForm: {
                    inputs: {
                        password: {
                            label: "Senha",
                            placeholder: "Digite a senha",
                            validations: {
                                empty: "Senha é um campo obrigatório"
                            }
                        },
                        username: {
                            label: "Nome de usuário",
                            placeholder: "Digite o nome de usuário",
                            validations: {
                                empty: "Nome de usuário é um campo obrigatório"
                            }
                        }
                    }
                }
            },
            notifications: {
                addAssociation: {
                    error: {
                        description: "{{description}}",
                        message: "Erro ao recuperar contas de usuário vinculadas"
                    },
                    genericError: {
                        description: "Ocorreu um erro ao adicionar a conta vinculada",
                        message: "Algo deu errado"
                    },
                    success: {
                        description: "A conta de usuário vinculada necessária adicionada com sucesso",
                        message: "Conta de usuário vinculada adicionada com sucesso"
                    }
                },
                getAssociations: {
                    error: {
                        description: "{{description}}",
                        message: "Erro ao recuperar contas de usuário vinculadas"
                    },
                    genericError: {
                        description: "Ocorreu um erro ao recuperar as contas de usuário vinculadas",
                        message: "Algo deu errado"
                    },
                    success: {
                        description: "Os detalhes do perfil do usuário necessários são recuperados com sucesso",
                        message: "Contas de usuário vinculadas recuperadas com sucesso"
                    }
                },
                removeAllAssociations: {
                    error: {
                        description: "{{description}}",
                        message: "Erro ao remover contas de usuário vinculadas"
                    },
                    genericError: {
                        description: "O usuário vinculado é responsável por remover o erro",
                        message: "Algo deu errado"
                    },
                    success: {
                        description: "Todas as contas de usuário vinculadas foram removidas",
                        message: "Contas vinculadas removidas"
                    }
                },
                removeAssociation: {
                    error: {
                        description: "{{description}}",
                        message: "Erro ao remover a conta de usuário vinculada"
                    },
                    genericError: {
                        description: "A conta do usuário vinculado que remove o erro ocorreu",
                        message: "Algo deu errado"
                    },
                    success: {
                        description: "As contas de usuário vinculadas foram removidas",
                        message: "A conta vinculada foi removida"
                    }
                },
                switchAccount: {
                    error: {
                        description: "{{description}}",
                        message: "Ocorreu um erro ao mudar de conta"
                    },
                    genericError: {
                        description: "Ocorreu um erro ao mudar de conta",
                        message: "Algo deu errado"
                    },
                    success: {
                        description: "A conta foi trocada com sucesso",
                        message: "Conta trocada com sucesso"
                    }
                }
            }
        },
        loginVerifyData: {
            description: "Esses dados são usados para verificar ainda mais sua identidade durante o login ",
            heading: "Dados usados para verificar o seu login",
            modals: {
                clearTypingPatternsModal: {
                    heading: "Confirmação",
                    message: "Esta ação irá limpar seus padrões de digitação salvos no TypingDNA. "+
                        "Você deseja continuar?"
                }
            },
            notifications: {
                clearTypingPatterns: {
                    error: {
                        description: "Os padrões de digitação não puderam ser apagados. Entre em contato com o"+
                            " administrador do seu site",
                        message: "Falha ao limpar padrões de digitação"
                    },
                    success: {
                        description: "Seus padrões de digitação no TypingDNA foram apagados com sucesso ",
                        message: "Padrões de digitação limpos com sucesso"
                    }
                }
            },
            typingdna: {
                description: "Seus padrões de digitação podem ser apagados aqui",
                heading: "TypingDNA padrões de Digitação"
            }
        },
        mfa: {
            authenticatorApp: {
                addHint: "Configurar",
                configuredDescription: "Você pode usar códigos TOTP de seu aplicativo " +
                    "autenticador configurado para autenticação de dois fatores. " +
                    "Se você não tiver acesso ao aplicativo, pode configurar um novo aplicativo autenticador aqui",
                deleteHint: "Remover",
                description: "Digitalize o código QR usando um aplicativo " +
                    "Authenticator para usar senhas de uso único baseadas " +
                    "em tempo (também conhecidas como TOTP) como um segundo " +
                    "fator ao fazer login em aplicativos.",
                enableHint: "Ativar/desativar o autenticador TOTP",
                heading: "Autenticador TOTP",
                hint: "Visão",
                modals: {
                    delete: {
                        heading: "Confirmação",
                        message: "Esta ação removerá o código QR adicionado ao seu perfil. Você deseja continuar ?"
                    },
                    done: "Sucesso! Agora você pode usar seu aplicativo de autenticação para autenticação de dois " +
                        "fatores",
                    heading: "Configurar um aplicativo autenticador",
                    scan: {
                        additionNote: "O código QR foi adicionado com sucesso ao seu perfil",
                        authenticatorApps: "Authenticator Apps",
                        generate: "Gere um novo código",
                        heading: "Leia este QR Code usando um aplicativo Authenticator",
                        messageBody: "Você pode encontrar uma lista de aplicativos autenticadores disponíveis aqui.",
                        messageHeading: "Não tem um aplicativo autenticador instalado?",
                        regenerateConfirmLabel: "Confirme a regeneração de um novo código QR",
                        regenerateWarning: {
                            extended: "Quando você regenera um novo código QR, você deve digitalizá-lo e recriar o aplicativo Authenticator.Você não poderá mais fazer login com o código QR anterior.",
                            generic: "Quando você regenera um novo código QR, você deve digitalizá-lo e recriar o aplicativo Authenticator.Sua configuração anterior não funcionará mais."
                        }
                    },
                    toolTip: "Não tem um aplicativo? Baixe um aplicativo autenticador como o " +
                        "Google Authenticator na <1>App Store</1> ou <3>Google Play</3>",
                    verify: {
                        error: "Falha na verificação. Por favor, tente novamente.",
                        heading: "Insira o código gerado para verificação",
                        label: "Código de verificação",
                        placeholder: "Digite seu código de verificação",
                        reScan: "Verificar novamente",
                        reScanQuestion: "Deseja digitalizar o código QR novamente?",
                        requiredError: "Insira o código de verificação"
                    }
                },
                notifications: {
                    deleteError: {
                        error: {
                            description: "{{error}}",
                            message: "Algo deu errado"
                        },
                        genericError: {
                            description: "Ocorreu um erro ao excluir a configuração do Autenticador TOTP",
                            message: "Algo deu errado"
                        }
                    },
                    deleteSuccess: {
                        genericMessage: "Removido com sucesso",
                        message: "Configuração TOTP removida com sucesso."
                    },
                    initError: {
                        error: {
                            description: "{{error}}",
                            message: "Algo deu errado"
                        },
                        genericError: {
                            description: "Ocorreu um erro ao recuperar o código QR",
                            message: "Algo deu errado"
                        }
                    },
                    refreshError: {
                        error: {
                            description: "{{error}}",
                            message: "Algo deu errado"
                        },
                        genericError: {
                            description: "Erro ao tentar obter um novo código QR",
                            message: "Algo deu errado"
                        }
                    },
                    updateAuthenticatorError: {
                        error: {
                            description: "{{error}}",
                            message: "Algo deu errado"
                        },
                        genericError: {
                            description: "Ocorreu um erro ao tentar atualizar a lista de autenticadores habilitados",
                            message: "Algo deu errado"
                        }
                    }
                },
                regenerate: "Regenerado"
            },
            backupCode: {
                actions: {
                    add: "Adicionar códigos alternativos",
                    delete: "Remover códigos alternativos"
                },
                description: "Use códigos de backup para acessar sua conta caso não consiga receber códigos de autenticação " +
                    "multifator. Você pode regenerar novos códigos, se necessário.",
                download: {
                    heading: "SALVE SEUS CÓDIGOS DE BACKUP.",
                    info1: "Você só pode usar cada código de backup uma vez.",
                    info2: "Esses códigos foram gerados em ",
                    subHeading: "Você pode usar esses códigos de backup para entrar no Asgardeo quando estiver " +
                        "longe do telefone. Mantenha esses códigos de backup em algum lugar seguro, mas acessível."
                },
                heading: "Códigos de backup",
                messages: {
                    disabledMessage: "Pelo menos um autenticador adicional deve ser configurado para permitir códigos de backup."
                },
                modals: {
                    actions: {
                        copied: "Copiado",
                        copy: "Copiar códigos",
                        download: "Códigos de download",
                        regenerate: "Regenerado"
                    },
                    delete: {
                        description: "Esta ação removerá os códigos de backup e você não poderá mais usá-los. " +
                            "Você deseja continuar?",
                        heading: "Confirmação"
                    },
                    description: "Use os códigos de backup para fazer login quando estiver longe do telefone. " +
                        "Você pode gerar mais quando todos são usados",
                    generate: {
                        description: "Todos os seus códigos de backup são usados. " +
                            "Permite gerar um novo conjunto de códigos de backup",
                        heading: "Gerar"
                    },
                    heading: "Códigos de backup",
                    info: "Cada código só pode ser usado uma vez",
                    regenerate: {
                        description: "Depois de gerar novos códigos, seus códigos antigos não funcionarão mais. "
                            + "Certifique-se de salvar os novos códigos assim que forem gerados.",
                        heading: "Confirmação"
                    },
                    subHeading: "Senhas de uso único que você pode usar para fazer login",
                    warn: "Esses códigos aparecerão apenas uma vez. Certifique-se de salvá-los agora e armazená-los "
                        + "em algum lugar seguro, mas acessível."
                },
                mutedHeader: "Opções de recuperação",
                notifications: {
                    deleteError: {
                        error: {
                            description: "{{error}}",
                            message: "Algo deu errado"
                        },
                        genericError: {
                            description: "Ocorreu um erro ao excluir códigos de backup",
                            message: "Algo deu errado"
                        }
                    },
                    deleteSuccess: {
                        genericMessage: "Removido com sucesso",
                        message: "Códigos de backup removidos com sucesso."
                    },
                    downloadError: {
                        error: {
                            description: "{{error}}",
                            message: "Algo deu errado"
                        },
                        genericError: {
                            description: "Ocorreu um erro ao tentar baixar os códigos de backup",
                            message: "Algo deu errado"
                        }
                    },
                    downloadSuccess: {
                        genericMessage: {
                            description: "Os códigos de backup foram baixados com sucesso.",
                            message: "Códigos de backup baixados com sucesso."
                        },
                        message: {
                            description: "{{message}}",
                            message: "Códigos de backup baixados com sucesso."
                        }
                    },
                    refreshError: {
                        error: {
                            description: "{{error}}",
                            message: "Algo deu errado"
                        },
                        genericError: {
                            description: "Ocorreu um erro ao tentar gerar novos códigos de backup",
                            message: "Algo deu errado"
                        }
                    },
                    retrieveAuthenticatorError: {
                        error: {
                            description: "{{error}}",
                            message: "Algo deu errado"
                        },
                        genericError: {
                            description: "Ocorreu um erro ao tentar obter a lista de autenticadores habilitados",
                            message: "Algo deu errado"
                        }
                    },
                    retrieveError: {
                        error: {
                            description: "{{error}}",
                            message: "Algo deu errado"
                        },
                        genericError: {
                            description: "Ocorreu um erro ao recuperar os códigos de backup",
                            message: "Algo deu errado"
                        }
                    },
                    updateAuthenticatorError: {
                        error: {
                            description: "{{error}}",
                            message: "Algo deu errado"
                        },
                        genericError: {
                            description: "Ocorreu um erro ao tentar atualizar a lista de autenticadores habilitados",
                            message: "Algo deu errado"
                        }
                    }
                },
                remaining: "restante"
            },
            fido: {
                description: "Você pode usar uma chave <1>Chave de acesso</1>, <1>De Segurança FIDO</1> ou " +
                    "<1>Biometria</1> em seu dispositivo para fazer login em sua conta.",
                form: {
                    label: "Chave de acesso",
                    placeholder: "Insira um nome para a chave de acesso",
                    remove: "Remova a chave de acesso",
                    required: "Insira um nome para sua chave de acesso"
                },
                heading: "Chave de acesso",
                modals: {
                    deleteConfirmation: {
                        assertionHint: "Por favor, confirme sua ação.",
                        content: "Esta ação é irreversível e excluirá permanentemente a chave de acesso.",
                        description: "Se você excluir essa chave de acesso, talvez não consiga fazer" +
                            " login na sua conta novamente. Por favor, prossiga com cautela.",
                        heading: "Tem certeza?"
                    },
                    deviceRegistrationErrorModal: {
                        description: "TA chave de acesso foi interrompido. " +
                            "Se isso não foi intencional, você pode tentar novamente o fluxo.",
                        heading: "Falha no registro da chave de acesso",
                        tryWithOlderDevice: "Você também pode tentar novamente com uma senha mais antiga."
                    }
                },
                noPassKeyMessage: "Você ainda não tem nenhuma chave de acesso registrada.",
                notifications: {
                    removeDevice: {
                        error: {
                            description: "{{description}}",
                            message: "Ocorreu um erro ao remover a chave de acesso"
                        },
                        genericError: {
                            description: "Ocorreu um erro ao remover a chave de acesso",
                            message: "Algo deu errado"
                        },
                        success: {
                            description: "A chave de acesso foi removida com sucesso da lista",
                            message: "Sua chave de acesso removido com sucesso"
                        }
                    },
                    startFidoFlow: {
                        error: {
                            description: "{{description}}",
                            message: "Ocorreu um erro ao recuperar a chave de acesso"
                        },
                        genericError: {
                            description: "Ocorreu um erro ao recuperar a chave de acesso",
                            message: "Algo deu errado"
                        },
                        success: {
                            description: "A chave de acesso foi registrada com sucesso " +
                                "e agora você pode usá-la para autenticação.",
                            message: "Sua chave de acesso registrado com sucesso"
                        }
                    },
                    updateDeviceName: {
                        error: {
                            description: "{{description}}",
                            message: "Ocorreu um erro ao atualizar o nome da chave de acesso"
                        },
                        genericError: {
                            description: "Ocorreu um erro ao atualizar o nome da chave de acesso",
                            message: "Algo deu errado"
                        },
                        success: {
                            description: "O nome da sua chave de acesso foi atualizado com sucesso",
                            message: "Nome da senha atualizado com sucesso"
                        }
                    }
                },
                tryButton: "Tente com uma senha mais antiga"
            },
            "pushAuthenticatorApp": {
                "addHint": "Configurar",
                "configuredDescription": "Pode utilizar os pedidos de início de sessão gerados pela sua aplicação autenticadora configurada para autenticação de dois fatores. Se não tiver acesso à aplicação, pode configurar uma nova aplicação autenticadora aqui.",
                "deleteHint": "Remover",
                "description": "Pode usar a aplicação autenticadora push para receber notificações de início de sessão como notificações push para autenticação de dois fatores.",
                "heading": "Autenticador Push",
                "hint": "Ver",
                "modals": {
                    "deviceDeleteConfirmation": {
                        "assertionHint": "Por favor, confirme a sua ação.",
                        "content": "Esta ação é irreversível e irá remover permanentemente o dispositivo.",
                        "description": "Se você remover este dispositivo, pode não conseguir entrar novamente na sua conta. Por favor, prossiga com cautela.",
                        "heading": "Tem a certeza?"
                    },
                    "scan": {
                        "additionNote": "O código QR foi adicionado ao seu perfil com sucesso!",
                        "done": "Sucesso! Agora pode utilizar a sua aplicação autenticadora push para autenticação de dois fatores.",
                        "heading": "Configurar a aplicação autenticadora push",
                        "messageBody": "Pode encontrar aqui uma lista de aplicações autenticadoras disponíveis.",
                        "subHeading": "Faça a leitura do código QR abaixo utilizando a aplicação autenticadora push"
                    }
                },
                "notifications": {
                    "delete": {
                        "error": {
                            "description": "{{error}}",
                            "message": "Algo correu mal"
                        },
                        "genericError": {
                            "description": "Ocorreu um erro ao remover o dispositivo registado",
                            "message": "Algo correu mal"
                        },
                        "success": {
                            "description": "O dispositivo registado foi removido com sucesso",
                            "message": "Dispositivo removido com sucesso"
                        }
                    },
                    "deviceListFetchError": {
                        "error": {
                            "description": "Ocorreu um erro ao obter os dispositivos registados para autenticação push",
                            "message": "Algo correu mal"
                        }
                    },
                    "initError": {
                        "error": {
                            "description": "{{error}}",
                            "message": "Algo correu mal"
                        },
                        "genericError": {
                            "description": "Ocorreu um erro ao obter o código QR",
                            "message": "Algo correu mal"
                        }
                    }
                }
            },
            smsOtp: {
                descriptions: {
                    hint: "Você receberá uma mensagem de texto contendo o código de verificação"
                },
                heading: "Número de telemóvel",
                notifications: {
                    updateMobile: {
                        error: {
                            description: "{{description}}",
                            message: "Ocorreu um erro ao atualizar o número do celular"
                        },
                        genericError: {
                            description: "Ocorreu um erro ao atualizar o número do celular",
                            message: "Algo deu errado"
                        },
                        success: {
                            description: "O número do celular no perfil do usuário é atualizado com sucesso",
                            message: "Número de celular atualizado com sucesso"
                        }
                    }
                }
            }
        },
        mobileUpdateWizard: {
            done: "Sucesso! O número do seu celular foi verificado com sucesso.",
            notifications: {
                resendError: {
                    error: {
                        description: "{{error}}",
                        message: "Algo deu errado"
                    },
                    genericError: {
                        description: "Ocorreu um erro ao tentar obter um novo código de verificação",
                        message: "Algo deu errado"
                    }
                },
                resendSuccess: {
                    message: "O pedido de reenvio do código foi enviado com sucesso"
                }
            },
            submitMobile: {
                heading: "Insira seu novo número de celular"
            },
            verificationSent: {
                heading: "Você receberá um OTP no seu número de celular para verificação em breve"
            },
            verifySmsOtp: {
                didNotReceive: "Não recebeu o código?",
                error: "Falha na verificação. Por favor, tente novamente.",
                heading: "Verifique o seu número de celular",
                label: "Digite o código de verificação enviado ao seu número de celular",
                placeholder: "Digite seu código de verificação",
                requiredError: "Insira o código de verificação",
                resend: "Reenviar"
            }
        },
        overview: {
            widgets: {
                accountActivity: {
                    actionTitles: {
                        update: "Gerenciar a atividade da conta"
                    },
                    description: "No momento, você está conectado no seguinte dispositivo",
                    header: "Sessões Ativas"
                },
                accountSecurity: {
                    actionTitles: {
                        update: "Atualizar segurança da conta"
                    },
                    description: "Configurações e recomendações para ajudar você a manter sua conta segura",
                    header: "Segurança da Conta"
                },
                accountStatus: {
                    complete: "Seu perfil está completo",
                    completedFields: "Campos preenchidos",
                    completionPercentage: "A conclusão do seu perfil está em {{percentage}}%",
                    inComplete: "Complete seu perfil",
                    inCompleteFields: "Campos incompletos",
                    mandatoryFieldsCompletion: "{{completed}} de {{total}} campos obrigatórios preenchidos",
                    optionalFieldsCompletion: "{{completed}} de {{total}} campos opcionais preenchidos"
                },
                consentManagement: {
                    actionTitles: {
                        manage: "Gerenciar consentimentos"
                    },
                    description: "Controle os dados que você deseja compartilhar com os aplicativos",
                    header: "Controle de Consentimento"
                },
                profileStatus: {
                    completionPercentage: "A conclusão do seu perfil está em {{percentage}}%",
                    description: "Gerencie seu perfil",
                    header: "Seu perfil do {{productName}}",
                    profileText: "Detalhes do seu perfil pessoal",
                    readOnlyDescription:"Ver seu perfil",
                    userSourceText: "(Conectado via {{source}})"
                }
            }
        },
        profile: {
            actions: {
                "deleteEmail": "Excluir endereço de e -mail",
                "deleteMobile": "Excluir móvel",
                "verifyEmail": "Verifique o endereço de e -mail",
                "verifyMobile": "Verifique o celular"
            },
            fields: {
                "Account Confirmed Time": "Tempo confirmado tempo",
                "Account Disabled": "conta desativada",
                "Account Locked": "Conta bloqueada",
                "Account State": "Estado da conta",
                "Active": "Ativa",
                "Address - Street": "Endereço - Rua",
                "Ask Password": "Pergunte a senha",
                "Backup Code Enabled": "Código de backup ativado",
                "Backup Codes": "Códigos de backup",
                "Birth Date": "Data de nascimento",
                "Country": "País",
                "Created Time": "Tempo criado",
                "Disable EmailOTP": "DDesative o email OTP",
                "Disable SMSOTP": "Desative smsotp",
                "Display Name": "Nome de exibição",
                "Email": "E-mail",
                "Email Addresses": "Endereço de e-mail",
                "Email Verified": "email verificado",
                "Enabled Authenticators": "Autenticadores habilitados",
                "Existing Lite User": "Usuário Lite existente",
                "External ID": "ID externo",
                "Failed Attempts Before Success": "Tentativas fracassadas antes do sucesso",
                "Failed Backup Code Attempts": "Tentativas de código de backup com falha",
                "Failed Email OTP Attempts": "Tentativas de OTP de e -mail fracassado",
                "Failed Lockout Count": "Contagem de bloqueio com falha",
                "Failed Login Attempts": "Tentativas de login com falha",
                "Failed Password Recovery Attempts": "Tentativas de recuperação de senha com falha",
                "Failed SMS OTP Attempts": "Falha no SMS OTP Tentativas",
                "Failed TOTP Attempts": "Totp com falha",
                "First Name": "Primeiro nome",
                "Force Password Reset": "Redefinição de senha de força",
                "Full Name": "Nome completo",
                "Gender": "Gênero",
                "Groups": "Grupos",
                "Identity Provider Type": "Tipo de provedor de identidade",
                "Last Logon": "Último logon",
                "Last Modified Time": "Último tempo modificado",
                "Last Name": "Sobrenome",
                "Last Password Update": "Última atualização de senha",
                "Lite User": "Usuário de Lite",
                "Lite User ID": "ID do usuário Lite",
                "Local": "local",
                "Local Credential Exists": "Credencial local existe",
                "Locality": "Localidade",
                "Location": "Localização",
                "Locked Reason": "Razão bloqueada",
                "Manager - Name": "Nome do gerente",
                "Middle Name": "Nome do meio",
                "Mobile": "Móvel",
                "Mobile Numbers": "Números de celular",
                "Nick Name": "Apelido",
                "Phone Verified": "Telefone verificado",
                "Photo - Thumbnail": "Foto - Miniatura",
                "Photo URL": "photoUrl",
                "Postal Code": "Código postal",
                "Preferred Channel": "Canal preferido",
                "Read Only User": "Leia apenas o usuário",
                "Region": "Região",
                "Resource Type": "Tipo de recurso",
                "Roles": "Papéis",
                "Secret Key": "Chave secreta",
                "TOTP Enabled": "TOTP ativado",
                "Time Zone": "Tfazer para zona",
                "URL": "Url",
                "Unlock Time": "Desbloquear o tempo",
                "User Account Type": "Tipo de conta de usuário",
                "User ID": "ID do usuário",
                "User Metadata - Version": "Metadados do usuário - versão",
                "User Source": "Fonte do usuário",
                "User Source ID": "ID de origem do usuário",
                "Username": "Nome de usuário",
                "Verification Pending Email": "Verificação em e -mail pendente",
                "Verification Pending Mobile Number": "Verificação com número de celular pendente",
                "Verified Email Addresses": "Endereços de e -mail verificados",
                "Verified Mobile Numbers": "Números de celular verificados",
                "Verify Email": "Verificar e-mail",
                "Verify Mobile": "Verifique o celular",
                "Verify Secret Key": "Verifique a chave secreta",
                "Website URL": "URL do site",
                emails: "O email",
                generic: {
                    default: "Adicionar {{fieldName}}"
                },
                nameFamilyName: "Último nome",
                nameGivenName: "Primeiro nome",
                phoneNumbers: "Número de telefone",
                profileImage: "Imagem de perfil",
                profileUrl: "URL",
                userName: "Nome de usuário"
            },
            forms: {
                countryChangeForm: {
                    inputs: {
                        country: {
                            placeholder: "Escolha o seu país"
                        }
                    }
                },
                dateChangeForm: {
                    inputs: {
                        date: {
                            validations: {
                                futureDateError: "A data inserida no campo {{field}} é inválida.",
                                invalidFormat: "Insira um {{fieldName}} válido no formato AAAA-MM-DD."
                            }
                        }
                    }
                },
                emailChangeForm: {
                    inputs: {
                        email: {
                            label: "O email",
                            note: "NOTA: Editar isso altera o endereço de e-mail associado a esta conta. Este " +
                                "endereço de e-mail também é usado para recuperação de conta.",
                            placeholder: "Insira o seu endereço de email",
                            validations: {
                                empty: "O endereço de email é um campo obrigatório",
                                invalidFormat: "O endereço de email não está no formato correto. Você pode usar " +
                                    "caracteres alfanuméricos, caracteres Unicode, sublinhados (_), travessões (-), " +
                                    "pontos (.) E uma arroba (@)."
                            }
                        }
                    }
                },
                generic: {
                    dropdown: {
                        placeholder: "Selecione o seu {{fieldName}}"
                    },
                    inputs: {
                        placeholder: "Insira o seu {{fieldName}}",
                        readonly: {
                            placeholder: "Este valor está vazio",
                            popup: "Contate o administrador para atualizar seu {{fieldName}}"
                        },
                        validations: {
                            empty: "{{fieldName}} é um campo obrigatório",
                            invalidFormat: "The {{fieldName}} não está no formato correto"
                        }
                    },
                    radioGroup: {
                        optionNone: "Nenhum"
                    }
                },
                mobileChangeForm: {
                    inputs: {
                        mobile: {
                            label: "Número de celular",
                            note: "NOTA: Isso mudará o número do celular em seu perfil",
                            placeholder: "Digite seu número de celular",
                            validations: {
                                empty: "O número do celular é um campo obrigatório",
                                invalidFormat: "Insira um número de celular válido no formato [+][código do país]"+
                                    "[código de área][número de telefone local]."
                            }
                        }
                    }
                },
                nameChangeForm: {
                    inputs: {
                        firstName: {
                            label: "Primeiro nome",
                            placeholder: "Digite o primeiro nome",
                            validations: {
                                empty: "O primeiro nome é um campo obrigatório"
                            }
                        },
                        lastName: {
                            label: "Último nome",
                            placeholder: "Digite o sobrenome",
                            validations: {
                                empty: "O sobrenome é um campo obrigatório"
                            }
                        }
                    }
                },
                organizationChangeForm: {
                    inputs: {
                        organization: {
                            label: "Organização",
                            placeholder: "Entre na sua organização",
                            validations: {
                                empty: "Organização é um campo obrigatório"
                            }
                        }
                    }
                }
            },
            messages: {
                emailConfirmation: {
                    content: "Please confirm the email address update in order to add the new email to your profile.",
                    header: "Confirmation pending!"
                },
                mobileVerification: {
                    content: "Este número de celular é usado para enviar SMS OTP quando a autenticação de segundo " +
                        "fator está habilitada e para enviar códigos de recuperação em caso de recuperação de nome " +
                        "de usuário / senha. Para atualizar este número, você deve verificar o novo número " +
                        "inserindo o código de verificação enviado para o seu novo número. Clique em atualizar se " +
                        "quiser continuar."
                }
            },
            modals: {
                customMultiAttributeDeleteConfirmation: {
                    assertionHint: "Por favor, confirme sua ação.",
                    content: "Esta ação é irreversível e eliminará permanentemente o valor selecionado.",
                    description: "Se eliminar este valor selecionado, este será removido permanentemente do seu perfil.",
                    heading: "Tem certeza?"
                },
                emailAddressDeleteConfirmation: {
                    assertionHint: "Por favor, confirme sua ação.",
                    content: "Esta ação é irreversível e excluirá permanentemente o endereço de e -mail.",
                    description: "Se você excluir este endereço de e -mail, ele será removido permanentemente do seu perfil.",
                    heading: "Tem certeza?"
                },
                mobileNumberDeleteConfirmation: {
                    assertionHint: "Por favor, confirme sua ação.",
                    content: "Esta ação é irreversível e excluirá permanentemente o número de celular.",
                    description: "Se você excluir esse número de celular, ele será removido permanentemente do seu perfil.",
                    heading: "Tem certeza?"
                }
            },
            notifications: {
                getProfileCompletion: {
                    error: {
                        description: "{{description}}",
                        message: "Ocorreu um erro"
                    },
                    genericError: {
                        description: "Ocorreu um erro ao calcular a conclusão do perfil",
                        message: "Algo deu errado"
                    },
                    success: {
                        description: "A conclusão do perfil foi calculada com sucesso",
                        message: "Cálculo bem sucedido"
                    }
                },
                getProfileInfo: {
                    error: {
                        description: "{{description}}",
                        message: "Ocorreu um erro ao recuperar os detalhes do perfil"
                    },
                    genericError: {
                        description: "Ocorreu um erro ao recuperar os detalhes do perfil",
                        message: "Algo deu errado"
                    },
                    success: {
                        description: "Os detalhes do perfil do usuário necessários são recuperados com sucesso",
                        message: "Perfil de usuário recuperado com sucesso"
                    }
                },
                getUserReadOnlyStatus: {
                    genericError: {
                        description: "Ocorreu um erro ao recuperar o status somente leitura do usuário",
                        message: "Algo deu errado"
                    }
                },
                updateProfileInfo: {
                    error: {
                        description: "{{description}}",
                        message: "Ocorreu um erro ao atualizar os detalhes do perfil"
                    },
                    genericError: {
                        description: "Ocorreu um erro ao atualizar os detalhes do perfil",
                        message: "Algo deu errado"
                    },
                    success: {
                        description: "Os detalhes do perfil de usuário necessários foram atualizados com sucesso",
                        message: "Perfil de usuário atualizado com sucesso"
                    }
                },
                verifyEmail: {
                    error: {
                        description: "{{description}}",
                        message: "Ocorreu um erro ao enviar o email de verificação"
                    },
                    genericError: {
                        description: "Ocorreu um erro ao enviar o email de verificação",
                        message: "Algo deu errado"
                    },
                    success: {
                        description: "O email de verificação foi enviado com sucesso. Verifique sua caixa de entrada",
                        message: "Email de verificação enviado com sucesso"
                    }
                },
                verifyMobile: {
                    error: {
                        description: "{{description}}",
                        message: "Ocorreu um erro ao enviar o código de verificação"
                    },
                    genericError: {
                        description: "Ocorreu um erro ao enviar o código de verificação ",
                        message: "Algo deu errado"
                    },
                    success: {
                        description: "O código de verificação foi enviado com sucesso. Verifique seu celular",
                        message: "Código de verificação enviado com sucesso"
                    }
                }
            },
            placeholders: {
                SCIMDisabled: {
                    heading: "Este recurso não está disponível para sua conta."
                }
            }
        },
        profileExport: {
            notifications: {
                downloadProfileInfo: {
                    error: {
                        description: "{{description}}",
                        message: "Ocorreu um erro ao baixar os detalhes do perfil do usuário"
                    },
                    genericError: {
                        description: "Ocorreu um erro ao baixar os detalhes do perfil do usuário",
                        message: "Algo deu errado"
                    },
                    success: {
                        description: "O arquivo que contém os detalhes necessários do perfil do usuário começou a " +
                            "baixar",
                        message: "Download dos detalhes do perfil do usuário iniciado"
                    }
                }
            }
        },
        selfSignUp: {
            preference: {
                notifications: {
                    error: {
                        description: "{{description}}.",
                        message: "Erro ao obter a preferência de auto-registo"
                    },
                    genericError: {
                        description: "Ocorreu um erro ao obter a preferência de auto-registo.",
                        message: "Algo correu mal"
                    },
                    success: {
                        description: "Preferência de auto-registo obtida com sucesso.",
                        message: "Obtenção da preferência de auto-registo bem-sucedida"
                    }
                }
            }
        },
        systemNotificationAlert: {
            resend: "Reenviar",
            selfSignUp: {
                awaitingAccountConfirmation: "A sua conta ainda não está ativa. Enviámos uma " +
                    "ligação de ativação para o seu endereço de e-mail registado. Precisa de uma nova ligação?",
                notifications: {
                    resendError: {
                        description: "Ocorreu um erro ao reenviar o e-mail de confirmação da conta.",
                        message: "Algo correu mal"
                    },
                    resendSuccess: {
                        description: "E-mail de confirmação de conta reenviado com sucesso.",
                        message: "E-mail de confirmação de conta reenviado com sucesso"
                    }
                }
            }
        },
        userAvatar: {
            infoPopover: "Esta imagem foi recuperada do serviço <1>Gravatar</1>.",
            urlUpdateHeader: "Insira um URL da imagem para definir sua foto de perfil"
        },
        userSessions: {
            browserAndOS: "{{browser}} no {{os}} {{version}}",
            dangerZones: {
                terminate: {
                    actionTitle: "Terminar",
                    header: "Encerrar sessão",
                    subheader: "Você será desconectado da sessão no dispositivo específico."
                }
            },
            lastAccessed: "Último acesso {{date}}",
            modals: {
                terminateActiveUserSessionModal: {
                    heading: "Encerrar sessões ativas atuais",
                    message:
                        "As alterações da opção de autenticação de segundo fator (2FA) não serão aplicadas às suas sessões ativas. " +
                        "Recomendamos que você os encerre.",
                    primaryAction: "Terminar tudo",
                    secondaryAction: "Revisar e encerrar"

                },
                terminateAllUserSessionsModal: {
                    heading: "Confirmação",
                    message: "A ação o desconectará desta sessão e de todas as outras sessões em todos os " +
                        "dispositivos. Você deseja continuar?"
                },
                terminateUserSessionModal: {
                    heading: "Confirmação",
                    message: "Esta ação fará com que você saia da sessão no dispositivo específico. Você deseja " +
                        "continuar?"
                }
            },
            notifications: {
                fetchSessions: {
                    error: {
                        description: "{{description}}",
                        message: "Erro ao recuperar a sessão do IDP"
                    },
                    genericError: {
                        description: "Não foi possível recuperar nenhuma sessão do IDP",
                        message: "Algo deu errado"
                    },
                    success: {
                        description: "Recuperadas com sucesso as sessões do IDP",
                        message: "Recuperação de sessão IDP bem-sucedida"
                    }
                },
                terminateAllUserSessions: {
                    error: {
                        description: "{{description}}",
                        message: "Não foi possível encerrar as sessões do IDP"
                    },
                    genericError: {
                        description: "Ocorreu um erro ao encerrar as sessões do IDP",
                        message: "Não foi possível encerrar as sessões do IDP"
                    },
                    success: {
                        description: "Terminou com êxito todas as sessões do IDP",
                        message: "Terminou todas as sessões do IDP"
                    }
                },
                terminateUserSession: {
                    error: {
                        description: "{{description}}",
                        message: "Não foi possível encerrar a sessão do IDP"
                    },
                    genericError: {
                        description: "Ocorreu um erro ao encerrar a sessão do IDP",
                        message: "Não foi possível encerrar a sessão do IDP"
                    },
                    success: {
                        description: "Encerrada com êxito a sessão do IDP",
                        message: "Sessão finalizada com sucesso"
                    }
                }
            }
        },
        verificationOnUpdate: {
            preference: {
                notifications: {
                    error: {
                        description: "{{description}}",
                        message: "Erro ao obter a verificação na preferência de atualização"
                    },
                    genericError: {
                        description: "Ocorreu um erro ao obter a verificação da preferência de atualização",
                        message: "Algo deu errado"
                    },
                    success: {
                        description: "A verificação da preferência de atualização foi recuperada com sucesso",
                        message: "verificação na recuperação de preferência de atualização bem-sucedida"
                    }
                }
            }
        }
    },
    modals: {
        editAvatarModal: {
            content: {
                gravatar: {
                    errors: {
                        noAssociation: {
                            content: "Parece que o email selecionado não está registrado no Gravatar. " +
                                "Cadastre-se para uma conta do Gravatar visitando o <1>site oficial do Gravatar</1> ou " +
                                "use um dos seguintes.",
                            header: "Nenhuma imagem do Gravatar correspondente encontrada!"
                        }
                    },
                    heading: "Gravatar baseado em "
                },
                hostedAvatar: {
                    heading: "Imagem Hospedada",
                    input: {
                        errors: {
                            http: {
                                content: "O URL selecionado aponta para uma imagem não segura veiculada por HTTP. " +
                                    "Prossiga com cuidado.",
                                header: "Conteúdo inseguro!"
                            },
                            invalid: {
                                content: "Insira um URL de imagem válido"
                            }
                        },
                        hint: "Insira um URL de imagem válido que esteja hospedado em um local de terceiros.",
                        placeholder: "Insira o URL da imagem.",
                        warnings: {
                            dataURL: {
                                content: "Usar URLs de dados com grande contagem de caracteres pode resultar em " +
                                    "problemas de banco de dados. Prossiga com cuidado.",
                                header: "Verifique novamente o URL de dados inserido!"
                            }
                        }
                    }
                },
                systemGenAvatars: {
                    heading: "Avatar gerado pelo sistema",
                    types: {
                        initials: "Initials"
                    }
                }
            },
            description: null,
            heading: "Atualizar foto de perfil",
            primaryButton: "Salve",
            secondaryButton: "Cancelar"
        },
        sessionTimeoutModal: {
            description: "Ao clicar em <1>Voltar</1>, tentaremos recuperar a sessão, se ela existir. Se você " +
                "não tiver uma sessão ativa, será redirecionado para a página de login.",
            heading: "Parece que você está inativo há muito tempo.",
            loginAgainButton: "Entrar novamente",
            primaryButton: "Volte",
            secondaryButton: "Sair",
            sessionTimedOutDescription: "Please log in again to continue from where you left off.",
            sessionTimedOutHeading: "A sessão do usuário expirou devido à inatividade."
        }
    },
    pages: {
        applications: {
            subTitle: "Descubra e acesse seus aplicativos",
            title: "Applications"
        },
        overview: {
            subTitle: "Gerenciar suas informações pessoais, segurança da conta e configurações de privacidade",
            title: "Bem-vindo, {{firstName}}"
        },
        personalInfo: {
            subTitle: "Edite ou exporte seu perfil pessoal e gerencie contas vinculadas",
            title: "Informação pessoal"
        },
        personalInfoWithoutExportProfile: {
            subTitle: "Edite o seu perfil pessoal",
            title: "Informação pessoal"
        },
        personalInfoWithoutLinkedAccounts: {
            subTitle: "Edite ou exporte o seu perfil pessoal",
            title: "Informação pessoal"
        },
        privacy: {
            subTitle: "",
            title: "Política de Privacidade do Servidor de Identidade WSO2"
        },
        readOnlyProfileBanner: "Seu perfil não pode ser modificado neste portal. " +
            "Entre em contato com seu administrador para obter mais detalhes.",
        security: {
            subTitle: "Atualize as configurações para tornar sua conta segura",
            title: "Segurança"
        }
    },
    placeholders: {
        404: {
            action: "Voltar para casa",
            subtitles: {
                0: "Não foi possível encontrar a página que você estava procurando.",
                1: "Por favor, verifique o URL ou clique no botão abaixo para ser redirecionado de volta à página " +
                    "inicial."
            },
            title: "página não encontrada"
        },
        accessDeniedError: {
            action: "Voltar para casa",
            subtitles: {
                0: "Parece que você não tem permissão para acessar esta página.",
                1: "Tente fazer login com uma conta diferente."
            },
            title: "Acesso não concedido"
        },
        emptySearchResult: {
            action: "Limpar consulta de pesquisa",
            subtitles: {
                0: "Não conseguimos encontrar resultados para \"{{query}}\"",
                1: "Tente um termo de pesquisa diferente."
            },
            title: "Nenhum resultado encontrado"
        },
        genericError: {
            action: "Recarregue a página",
            subtitles: {
                0: "Ocorreu um erro ao exibir esta página.",
                1: "Consulte o console do navegador para obter detalhes técnicos."
            },
            title: "Algo deu errado"
        },
        loginError: {
            action: "Continuar logout",
            subtitles: {
                0: "Parece que você não tem permissão para usar este portal.",
                1: "Faça login com uma conta diferente."
            },
            title: "Você não está autorizado"
        },
        sessionStorageDisabled: {
            subtitles: {
                0: "Para usar este aplicativo, você deve habilitar os cookies nas configurações do seu navegador.",
                1: "Para obter mais informações sobre como habilitar cookies, consulte a seção de ajuda " +
                    "do seu navegador."
            },
            title: "Os cookies estão desabilitados em seu navegador."
        }
    },
    sections: {
        accountRecovery: {
            description: "Gerenciar informações de recuperação que podemos usar para ajudá -lo a recuperar sua senha",
            emptyPlaceholderText: "Sem opções de recuperação de conta disponíveis",
            heading: "Recuperação de Conta"
        },
        changePassword: {
            actionTitles: {
                change: "Mude sua senha"
            },
            description: "Alterar e modificar a senha existente",
            heading: "Mudar Senha"
        },
        consentManagement: {
            actionTitles: {
                empty: "Você não concedeu consentimento a nenhum aplicativo"
            },
            description: "Revise os consentimentos que você forneceu para cada aplicativo. " +
                "Além disso, você pode revogar um ou mais deles, conforme necessário.",
            heading: "Aplicações Consentidas",
            placeholders: {
                emptyConsentList: {
                    heading: "Você não concedeu consentimento a nenhum aplicativo"
                }
            }
        },
        createPassword: {
            actionTitles: {
                create: "Criar senha"
            },
            description: "Crie uma senha no {{productName}}. " +
                "Você pode usar essa senha para fazer login no {{productName}}, " +
                "além do login social.",
            heading: "Criar senha"
        },
        federatedAssociations: {
            description: "Visualize suas contas de outras conexões vinculadas a esta conta",
            heading: "Logins Externos"
        },
        linkedAccounts: {
            actionTitles: {
                add: "Adicionar Conta"
            },
            description: "Gerencie todas as suas contas vinculadas em um só lugar",
            heading: "Contas Ligadas"
        },
        mfa: {
            description: "Adicione uma camada extra de proteção à sua conta configurando várias etapas de " +
                "autenticação.",
            heading: "Autenticação Multifatorial"
        },
        profile: {
            description: "Gerencie e atualize suas informações básicas de perfil",
            heading: "Perfil"
        },
        profileExport: {
            actionTitles: {
                export: "Baixe o perfil"
            },
            description: "Baixe todos os dados do seu perfil, incluindo dados pessoais e contas vinculadas",
            heading: "Exportar Perfil"
        },
        userSessions: {
            actionTitles: {
                empty: "Sem sessões ativas",
                terminateAll: "Terminar todas as sessões"
            },
            description: "Reveja todas as sessões que estão atualmente ativas em sua conta",
            heading: "Sessões Ativas",
            placeholders: {
                emptySessionList: {
                    heading: "Não há sessões IDP ativas para este usuário"
                }
            }
        }
    }
};
