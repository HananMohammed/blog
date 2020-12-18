<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\CategoryRequest;
use App\Models\Api\Category;

class CategoryController extends Controller
{
    /**
     * Display a listing of the Category.
     *
     * @return
     */
    public function index()
    {
         $categories = Category::paginate(5);

        return $categories ;
    }
    /**
     * Store a newly created Category in storage.
     *
     * @param  CategoryRequest  $request
     * @param Category $model
     * @return Response
     */
    public function store(CategoryRequest $request, Category $model)
    {
        $category = $model->create($request->all());

        return response()->json(["data"=>$category, "success"=>"Category Stored Successfully "]);

    }

    /**
     * Show the form for editing the specified Category.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        $category = Category::find($id);
        return $category;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  CategoryRequest $request
     * @param  int  $id
     * @return Response
     */
    public function update(CategoryRequest $request, $id)
    {
        $category = Category::find($id) ;
        $category->update($request->all()) ;
    }

    /**
     * Remove the specified Category from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        $category = Category::find($id);
        $category->delete();
    }
}
