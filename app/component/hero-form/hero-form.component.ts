/**
 * Created by Jonathan on 2016/10/31.
 */
import { Component } from '@angular/core';
import {HeroForm} from "../../domain/HeroForm";

@Component({
    moduleId: module.id,
    selector: 'hero-form',
    templateUrl: 'hero-form.component.html'
})
export class HeroFormComponent {
    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];
    model = new HeroForm(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = false;
    onSubmit() { this.submitted = true; }
    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }//我们在最后增加一个 diagnostic 属性，它返回这个模型的 JSON 形式。 它会帮我们看清开发过程中发生的事，等最后做清理时我们会丢弃它。
}
