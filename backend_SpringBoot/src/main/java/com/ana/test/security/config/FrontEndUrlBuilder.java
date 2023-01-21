package com.ana.test.security.config;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

/**
 * Classe qui à partir des différentes variables globales fait une concaténation
 * et renvoie une URL pour le front.
 */
@Component
public class FrontEndUrlBuilder {

    @Value("${front.url}")
    private String frontUrl;

    @Value("${front.url.port}")
    private String frontUrlPort;

    @Value("${front.url.protocol}")
    private String frontUrlProtocol;

    /**
     * Construit une URL à partir du protocole, de la racine et du port.
     * @return
     */
    public String buildURL() {
        checkProtocolNotEmpty();
        checkUrlNotEmpty();
        String portConfig = ":"+frontUrlPort;
        if(frontUrlPort.equals("80")) {
            portConfig = "";
        }
        return frontUrlProtocol+"://"+frontUrl+portConfig;

    }

    private void checkUrlNotEmpty() {
        if (StringUtils.isBlank(frontUrl)) {
            throw new NullPointerException("L'URL ne peut être vide ou null");
        }
    }

    private void checkProtocolNotEmpty() {
        if (StringUtils.isBlank(frontUrlProtocol)) {
          throw new NullPointerException("Le protocole ne peut être vide ou null");
        }
    }
}
