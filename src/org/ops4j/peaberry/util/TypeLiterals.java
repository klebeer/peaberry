/**
 * Copyright (C) 2008 Stuart McCulloch
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.ops4j.peaberry.util;

import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;

import org.ops4j.peaberry.Export;

import com.google.inject.TypeLiteral;

/**
 * Methods for creating various type-literals.
 * 
 * @author mcculls@gmail.com (Stuart McCulloch)
 */
public final class TypeLiterals {

  // instances not allowed
  private TypeLiterals() {}

  /**
   * Create a type-literal representing an iterable sequence of the given type.
   * 
   * @param clazz service interface
   * @return parameterised type-literal
   */
  @SuppressWarnings("unchecked")
  public static <T> TypeLiteral<Iterable<? extends T>> iterable(final Class<T> clazz) {
    return (TypeLiteral<Iterable<? extends T>>) TypeLiteral.get(new ParameterizedType() {

      public Type[] getActualTypeArguments() {
        return new Type[] {clazz};
      }

      public Type getRawType() {
        return Iterable.class;
      }

      public Type getOwnerType() {
        return null;
      }
    });
  }

  /**
   * Create a type-literal representing an exported handle of the given type.
   * 
   * @param clazz service interface
   * @return parameterised type-literal
   */
  @SuppressWarnings("unchecked")
  public static <T> TypeLiteral<Export<? extends T>> export(final Class<T> clazz) {
    return (TypeLiteral<Export<? extends T>>) TypeLiteral.get(new ParameterizedType() {

      public Type[] getActualTypeArguments() {
        return new Type[] {clazz};
      }

      public Type getRawType() {
        return Export.class;
      }

      public Type getOwnerType() {
        return null;
      }
    });
  }
}
