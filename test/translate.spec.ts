var expect = require('chai').expect;
import {Translate} from '../translate';

describe('translate', () => {


    describe('translate function', function () {

        let translate = new Translate();

        it('should translate a message without parameters', () => {

            expect(translate.translate('de', 'a few seconds ago')).to.equal('vor wenigen Sekunden');

        });

        it('should translate a message with parameters', () => {

            expect(translate.translate('de', 'seconds ago', {seconds: 20})).to.equal('vor 20 Sekunden');

        });

        it('should return the message key if locale cannot be found', () => {

            expect(translate.translate('xx', 'seconds ago')).to.equal('seconds ago');

        });

    });

});
