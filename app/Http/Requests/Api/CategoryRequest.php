<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CategoryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        if($this->isMethod('put'))
        {
            $id = request()->route('id') ;
            $rules =  [
                "name" =>[
                    "required",
                    "string",
                    Rule::unique("categories","name")->ignore($id)

                ]
            ];
        }
        else
        {
            $rules =  [
                "name" => "required|string|unique:categories,name"
            ];

        }

        return $rules ;
    }
}
