import { DevelopmentSection } from '@/components/doc/common/developmentsection';
import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function AccessibilityDoc() {
    const code = {
        basic: `
<Card role="region">
    Content
</Card>
        `
    };

    return (
        <DevelopmentSection>
            <DocSectionText id="accessibility" label="Accessibility">
                <h3>Screen Reader</h3>
                <p>
                    A card can be utilized in many use cases as a result no role is enforced, in fact a role may not be necessary if the card is used for presentational purposes only. Any valid attribute is passed to the container element so if you
                    require to use one of the{' '}
                    <a href="https://www.w3.org/TR/wai-aria/#landmark" alt="Landmark Roles">
                        landmark
                    </a>{' '}
                    roles like <i>region</i>, you may use the <i>role</i> property.
                </p>

                <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />

                <h3>Keyboard Support</h3>
                <p>Component does not include any interactive elements.</p>
            </DocSectionText>
        </DevelopmentSection>
    );
}
