<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'            => $this->id,
            'name'          => $this->name,
            'email'         => $this->email,
            'avatar'        => $this->avatar,
            'roles'         => RoleResource::collection($this->roles)->pluck('name')->toArray(),
            'permissions'   => PermissionResource::collection($this->getAllPermissions())->pluck('name')->toArray(),
            'emailVerified' => $this->email_verified_at,
        ];
    }
}
